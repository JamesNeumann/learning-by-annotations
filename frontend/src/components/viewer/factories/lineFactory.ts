import { Point } from 'openseadragon';
import { AnnotationLine } from '../../../model/svg/annotationLine';
import { OffsetAnnotationLine } from '../../../model/svg/offsetAnnotationLine';
import { OffsetAnnotationLineData } from '../../../model/viewer/export/offsetAnnotationLineData';
import { AnnotationBaseData, AnnotationBaseOffsetData, AnnotationFactory } from './annotationFactory';

export class LineFactory extends AnnotationFactory<AnnotationLine> {
  public create(annotationData: AnnotationBaseData): AnnotationLine {
    const points: Point[] = this.convertToPoints(annotationData.data.coord.viewport || []);

    let annotationLine: AnnotationLine = new AnnotationLine(
      annotationData.node,
      annotationData.data.type,
      annotationData.strokeColor,
      annotationData.data.id
    );

    annotationLine.name = annotationData.data.name;

    annotationLine.addClosedLine(points, annotationData.radius, annotationData.strokeWidth);

    return annotationLine;
  }

  public createOffset(annotationData: AnnotationBaseOffsetData): OffsetAnnotationLine {
    const points: Point[] = this.convertToPoints(annotationData.data.coord.viewport || []);

    const offsetAnnotationLineData: OffsetAnnotationLineData = annotationData.data as OffsetAnnotationLineData;

    let offsetAnnotationLine = new OffsetAnnotationLine(
      annotationData.node,
      annotationData.data.type,
      annotationData.data.color,
      offsetAnnotationLineData.offsetRadius,
      annotationData.data.id,
      offsetAnnotationLineData.changedManual
    );

    offsetAnnotationLine.name = annotationData.data.name;

    const outerPoints = offsetAnnotationLineData.outerPoints.viewport!.map((point) => new Point(point.x, point.y));
    offsetAnnotationLine.addClosedOffsetLine(
      points,
      outerPoints,
      offsetAnnotationLineData.offsetRadius,
      annotationData.scale || 0
    );

    return offsetAnnotationLine;
  }

  public static getInstance(): LineFactory {
    return new LineFactory();
  }
}
