import { User } from 'model/user';
import { UserSolution } from '../../model/userSolution';
import { reactive, ref } from 'vue';
import { Annotation } from './svg/annotation/annotation';

export const polygonChanged = reactive<{
  changed: boolean;
  polygon: Annotation | null;
  loading: boolean;
}>({
  changed: false,
  polygon: null,
  loading: false
});

export const viewerLoadingState = reactive<{
  dataLoaded: boolean;
  tilesLoaded: boolean;
  annotationsLoaded: boolean;
  solveResultLoading: boolean;
  solutionLoading: boolean;
}>({
  dataLoaded: false,
  tilesLoaded: false,
  annotationsLoaded: false,
  solveResultLoading: false,
  solutionLoading: false
});

export const isTaskSaving = ref<Boolean>(false);

export const userSolutionLocked = ref<Boolean>(false);
export const showSolution = ref<Boolean>(false);

export const viewerZoom = ref<number>();
export const viewerScale = ref<number>();

export const selectedPolygon = ref<Annotation | null>();

export const loadedUserSolutions = new Map<number, any>();
export const annotationsToUser = new Map<string, User>();
export const updateUserSolutions = ref<boolean>(false);
export const userSolutionAnnotationsLoading = ref<boolean>(false);
