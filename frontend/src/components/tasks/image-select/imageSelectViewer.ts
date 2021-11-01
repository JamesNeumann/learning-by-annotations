import { select, Selection } from 'd3-selection';
import OpenSeadragon, { MouseTracker, TileCache, Viewer } from 'openseadragon';
import { ref, Ref } from 'vue';
import { SLIDE_IMAGE_URL } from '../../../config';
import { ImageSelectFeedback, RESULT_POLYGON_COLOR } from '../../../model/result';
import { ANNOTATION_COLOR } from '../../../model/viewer/colors';
import { options, SVG_ID } from '../../viewer/core/options';
import { SvgOverlay } from '../../viewer/core/svg-overlay';
import { viewerLoadingState } from '../../viewer/core/viewerState';

export class ImageSelectViewer {
  private _viewer: Viewer;

  private _overlay: SvgOverlay;

  private _selectedImages: Ref<Set<string>>;

  private _tilesSources: string[];

  private _selectColor: string;

  private _rects: Selection<SVGRectElement, unknown, HTMLElement, any>[];

  private _imageSelectFeedback: ImageSelectFeedback[];

  private _clickDisabled: Boolean = false;

  constructor(images: string[], selected: string[], selectColor = ANNOTATION_COLOR.SOLUTION_COLOR) {
    this._selectedImages = ref(new Set(selected));
    this._tilesSources = [];
    this._selectColor = selectColor;
    this._rects = [];
    this._imageSelectFeedback = [];

    const viewerOptions = options(
      'viewerImage',
      'https://cdn.pixabay.com/photo/2021/01/01/21/09/challenger-5880009_960_720.jpg'
    );

    viewerOptions.collectionMode = true;
    viewerOptions.collectionTileMargin = 100;

    this._tilesSources = images;

    // for (const image of images) {
    //   this._tilesSources.push(SLIDE_IMAGE_URL + '/' + image);
    // }

    viewerOptions.tileSources = this._tilesSources.map((image) => {
      return {
        type: 'image',
        url: SLIDE_IMAGE_URL + '/' + image
      };
    });

    this._viewer = OpenSeadragon(viewerOptions);
    new TileCache({ maxImageCacheCount: 500 });

    new SvgOverlay(this._viewer);
    select('#' + SVG_ID).remove();

    this._overlay = this._viewer.svgOverlay();

    this.initViewer();
  }

  initViewer() {
    this._viewer.addHandler('open', () => {
      for (let i = 0; i < this._tilesSources.length; i++) {
        const tiledImage = this._viewer.world.getItemAt(i);
        const box = tiledImage.getBounds(true);

        const imageId = this._tilesSources[i].split('/')[1].split('.')[0];

        this._rects[i] = select('#background')
          .append('rect')
          .attr('x', box.x)
          .attr('y', box.y)
          .attr('width', box.width)
          .attr('height', box.height)
          .attr('fill', 'transparent')
          .attr('stroke-width', 10)
          .attr('stroke', this._selectedImages.value.has(imageId) ? this._selectColor : 'none')
          .attr('id', imageId);
      }

      viewerLoadingState.tilesLoaded = true;
      viewerLoadingState.annotationsLoaded = true;

      this._setRectColors();
    });

    const self = this;

    new MouseTracker({
      element: this._viewer.canvas,
      clickHandler: (event: any) => {
        if (event.quick) {
          select('#background')
            .selectAll('rect')
            .on('click', function () {
              if (!self._clickDisabled) {
                const rect = select(this);
                const index = rect.attr('id');

                if (self._selectedImages.value.has(index)) {
                  self._selectedImages.value.delete(index);
                  rect.attr('stroke', 'none');
                } else {
                  self._selectedImages.value.add(index);
                  rect.attr('stroke', self._selectColor);
                }
              }
            });
        } else {
          select('#background').selectAll('rect').on('click', null);
        }
      }
    });
  }

  setResultColors(imageSelectFeedback: ImageSelectFeedback[]) {
    this._imageSelectFeedback = imageSelectFeedback;
    this._setRectColors();
  }

  resetResultColors() {
    if (this._selectedImages) {
      for (const rect of this._rects) {
        if (rect.attr('stroke') !== 'none') {
          rect.attr('stroke', this._selectColor);
        }
      }
    }
  }

  destroy() {
    this._viewer.destroy();
  }

  private _setRectColors() {
    for (const feedback of this._imageSelectFeedback) {
      const rect = this._rects.find((rect) => rect.attr('id') === feedback.image);
      if (rect) {
        rect.attr('stroke', RESULT_POLYGON_COLOR[feedback.status]!);
      }
    }
  }

  get selectedImagesRef(): Ref<Set<string>> {
    return this._selectedImages;
  }

  set clickDisabled(disabled: Boolean) {
    this._clickDisabled = disabled;
  }
}
