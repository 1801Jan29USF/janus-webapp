// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const context = 'http://localhost:8909/';
const bam = 'http://18.219.59.193:9001/api/v2';
export const environment = {
  production: false,

  hydraContext: 'http://localhost:8765/',


  context: context, // change for what the production environment would actually be
  bam: bam,
  url: 'http://localhost:8080/',

  assessment: {
    fetchByBatchIdByWeek: (batchId: number, week: number) => `${context}trainer/assessment/${batchId}/${week}`,
    save: () => `${context}trainer/assessment/create`,
    update: () => `${context}trainer/assessment/update`,
    delete: (assessmentId: number) => `${context}trainer/assessment/delete/${assessmentId}`,
  },

  batch: {
    fetchAllByTrainer: () => `${context}trainer/batch/all`,
    fetchAll: () => `${context}vp/batch/all`,
    save: () => `${context}all/batch/create`,
    update: () => `${context}all/batch/update`,
    delete: (batchId) => `${context}all/batch/delete/${batchId}`,
  },

  category: {
    fetchAll: () => `${context}vp/category`,
    fetchAllActive: () => `${context}category/all`,
    fetchById: (id: number) => `${context}category/${id}`,
    save: () => `${context}vp/category`,
    update: () => `${context}vp/category/update`,
  },

  location: {
    fetchAll: () => `${context}all/location/all`,
    save: () => `${context}vp/location/create`,
    update: () => `${context}vp/location/update`,
  },

  note: {
    fetchQcBatchNotesByBatchIdByWeek: (batchId: number, week: number) => `${context}qc/note/batch/${batchId}/${week}`,
    fetchQcTraineeNotesByBatchIdByWeek: (batchId: number, week: number) => `${context}qc/note/trainee/${batchId}/${week}`,
    fetchBatchNotesByBatchIdByWeek: (batchId: number, week: number) => `${context}trainer/note/batch/${batchId}/${week}`,
    fetchTraineeNotesByBatchIdByWeek: (batchId: number, week: number) => `${context}trainer/note/trainee/${batchId}/${week}`,
    fetchTrainingNotesByTrainee: (traineeId: number) => `${context}all/notes/trainee/${traineeId}`,
    fetchQcNotesByTrainee: (traineeId: number) => `${context}qc/note/trainee/${traineeId}`,
    update: () => `${context}note/update`,
    save: () => `${context}note/create`,
    getAllQCTraineeNotes: (batchId: number, week: number) => `${context}qc/note/trainee/${batchId}/${week}`,
    findQCBatchNotes: (batchId: number, week: number) => `${context}qc/note/batch/${batchId}/${week}`,
  },

  panel: {
    fetchAll: () => `${context}panel/all`,
    fetchAllByTrainee: (traineeId) => `${context}panel/trainee/${traineeId}`,
    save: () => `${context}panel/create`,
    update: () => `${context}panel/update`,
    delete: (panelId: number) => `${context}panel/delete/${panelId}`,
  },

  grade: {
    fetchByBatchIdByWeek: (batchId, week) => `${context}all/grades/batch/${batchId}/week/${week}`,
    save: () => `${context}trainer/grade/create`,
    update: () => `${context}trainer/grade/update`,
  },

  qcStatus: {
    fetchAll: () => `${context}types/qcstatus/all`,
  },

  skill: {
    fetchAll: () => `${context}types/skill/all`,
  },

  trainee: {
    fetchAllByBatch: (batchId: number) => `${context}all/trainee?batchId=${batchId}`,
    save: () => `${context}all/trainee/create`,
    update: () => `${context}all/trainee/update`,
    delete: (traineeId: number) => `${context}all/trainee/delete/${traineeId}`,
  },

  trainer: {
    fetchByEmail: (email: string) => `${context}training/trainer/byemail/${email}`,
    fetchAll: () => `${context}all/trainer/all`,
    save: () => `${context}vp/trainer/create`,
    update: () => `${context}vp/trainer/update`,
    getTitles: () => `${context}vp/trainer/titles`,
    getTiers: () => `${context}types/trainer/role/all`,
  },

  trainingType: {
    fetchAll: () => `${context}types/training/all`,
  },

  traineeStatus: {
    fetchAll: () => `${context}types/trainingstatus/all`,
  },

  // API calls for the VP functionality group
  getAllCategories: context + 'vp/category',
  addNewCategory: context + 'vp/category',
  editCurrentCategory: context + 'vp/category/update',

  // Location API calls
  getAllLocations: context + 'all/location/all',
  editLocation: context + 'vp/location/update',
  deleteLocation: context + 'vp/location/update',
  reactivateLocation: context + 'vp/location/reactivate',
  addLocation: context + 'vp/location/create',

  // Trainer API calls
  getAllTitles: context + 'vp/trainer/titles',
  getAllTiers: context + 'types/trainer/role/all',
  getAllTrainers: context + 'all/trainer/all',
  addNewTrainer: context + 'vp/trainer/create',
  deleteTrainer: context + 'vp/trainer/update',
  editTrainer: context + 'vp/trainer/update',

  // Reports Service API endpoints
  reportsStackedBarCurrentWeek: context + 'all/reports/batch/week/stacked-bar-current-week',
  reportsDashBoard: context + 'all/reports/dashboard',
  reportsBiWeeklyPanel: context + 'all/reports/biweeklyPanelResults',

  /* Reporting service API endpoints */
  apiBatchComparisonAvgEndpoint: (skill: string, training: string, startDate) =>
    environment.context + `/all/reports/compare/skill/${skill}/training/${training}/date/${startDate}`,

  apifetchBatchWeekPieChart: (batchId: Number, weekId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/pie`,

  apiPieChartCurrentWeekQCStatus: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/pie`,

  apiAllBatchesCurrentWeekQCStackedBarChart: (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`,

  apiBatchWeekAvgBarChart: (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`,

  apiBatchWeekSortedBarChart: (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-weekly-sorted`,

  apiBatchOverallTraineeBarChart: (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/bar-batch-overall-trainee`,

  apiBatchOverallBarChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/bar-batch-overall`,

  apiBatchWeekTraineeBarChart: (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/bar-batch-week-trainee`,

  apiTraineeUpToWeekLineChart: (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/line-trainee-up-to-week`,

  apiTraineeOverallLineChart: (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/line-trainee-overall`,

  apiBatchOverallLineChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/line-batch-overall`,

  apiCurrentBatchesLineChart: this.context + 'all/reports/dashboard',
  apiCurrentPanelsLineChart: this.context + 'all/reports/biweeklyPanelResults',

  apiTraineeUpToWeekRadarChart: (week: Number, traineeId: Number) =>
    environment.context + `all/reports/week/${week}/trainee/${traineeId}/radar-trainee-up-to-week`,

  apiTraineeOverallRadarChart: (traineeId: Number) =>
    environment.context + `all/reports/trainee/${traineeId}/radar-trainee-overall`,

  apiBatchOverallRadarChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/radar-batch-overall`,

  apiBatchAllTraineesRadarChart: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/radar-batch-all-trainees`,

  apiBatchWeekAverageValue: (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/average/${batchId}/${weekId}`,

  apiTechnologiesForTheWeek: (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/categories/batch/${batchId}/week/${weekId}`,

  apiPanelBatchAllTrainees: (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/panel-batch-all-trainees`,

    /* Evaluation service API endpoints */
  apiFetchAllQCTraineeNotes: (batchId: Number, weekId: Number) =>
  environment.context + `qc/note/trainee/${batchId}/${weekId}`,

  apiFetchAllQCBatchNotes: (batchId: Number, weekId: Number) =>
  environment.context + `qc/note/batch/${batchId}/${weekId}`,

  /** BAM Specific Endpoints */
  bambatch: {
        getBatchAllUrl: () => `${bam}/batch/all`,
        getPastBatchesUrl: (email: string) => `${bam}/batch/past/${email}/`,
        getFutureBatchesUrl: (email: string) => `${bam}/batch/future/${email}/`,
        getBatchInProgressUrl: (email: string) => `${bam}/batch/inprogress/${email}/`,
        getAllBatchesInProgressUrl: (email: string) => `${bam}/batch/allinprogress/${email}/`,
        getBatchByIdURL: (batchId: number) => `${bam}/batch/byid/${batchId}/`,
        updateBatchUrl: () => `${bam}/batch/updatebatch`,
        getAllBatchTypesUrl: () => `${bam}/batch/batchtypes`,
        removeSubtopicFromBatchUrl: (subtopicId: number) => `${bam}/batch/${subtopicId}`,
        getAllInProgressUrl: () => `${bam}/batch/currentbatches`
    },

    curriculum: {
        getCurriculumAllUrl: () => `${bam}/curriculum/all`,
        getCurriculumByIdUrl: (id: number) => `${bam}/curriculum/getcurriculum/${id}`,
        getSchedulesByCurriculumIdUrl: (id: number) => `${bam}/curriculum/schedule/${id}`,
        getTopicPoolAllUrl: () => `${bam}/curriculum/topicpool`,
        getSubtopicPoolAllUrl: () => `${bam}/curriculum/subtopicpool`,
        addCurriculumUrl: () => `${bam}/curriculum/addcurriculum`,
        makeCurriculumMasterByIdUrl: (id: number) => `${bam}/curriculum/makemaster/${id}`,
        syncBatchByIdUrl: (id: number) => `${bam}/curriculum/syncbatch/${id}`,
        deleteCurriculumVersionUrl: () => `${bam}/curriculum/deleteversion`
    },

    calendar: {
        getSubtopicsByBatchPaginationUrl: (batchId: number, pageNumber: number, pageSize: number) =>
            `${bam}/calendar/subtopicspagination/${batchId}/${pageNumber}/${pageSize}/`,
        getSubtopicsByBatchUrl: (batchId: number) => `${bam}/calendar/subtopics/${batchId}`,
        getNumberOfSubTopicsByBatchUrl: (batchId: number) => `${bam}/calendar/getnumberofsubtopics/${batchId}`,
        getTopicsByBatchPagUrl: (batchId: number) => `${bam}/calendar/topics/${batchId}`,
        changeTopicDateUrl: (subtopicId: number, batchId: number, date: number) =>
            `${bam}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`,
        updateTopicStatusUrl: (subtopicId: number, batchId: number, status: string) =>
            `${bam}/calendar/statusupdate/${subtopicId}/${batchId}/${status}`,
        addTopicsUrl: () => `${bam}/calendar/addtopics`,
    },

    assignForce: {
        refreshBatches: () => `${bam}/refreshbatches`
    },

    users: {
        getAllUsersUrl: () => `${bam}/user/all`,
        getAllTrainersUrl: () => `${bam}/user/alltrainers`,
        getAllAssociatesUrl: () => `${bam}/user/allassociates`,
        getUsersInBatchUrl: (batchId: number) => `${bam}/user/inbatch/${batchId}`,
        dropUserFromBatchUrl: (userId: number) => `${bam}/user/drop/${userId}`,
        updateUserUrl: () => `${bam}/user/update`,
        addUserUrl: () => `${bam}/user/register`,
        resetPasswordUrl: () => `${bam}/user/reset`,
        removeUserUrl: (userId: number) => `${bam}/user/remove/${userId}`,
        addUserToBatchUrl: (batchId: number, userId: number) => `${bam}/user/add/${userId}/${batchId}`,
        getUsersNotInBatchUrl: () => `${bam}/user/notinabatch`,
        recoverPasswordUrl: () => `${bam}/user/recovery`
    },

    topic: {
        addTopicName: (name: string) => `${bam}/topic/add/${name}`,
    },

    subtopic: {
       addSubTopicName: (subtopicName: string, topicId: number, typeId: number) =>
        `${bam}/subtopic/add/${typeId}/${topicId}/${subtopicName}`,
       removeSubtopic: (subtopicId: number) => `${bam}/subtopic/remove/${subtopicId}`,
       removeAllSubtopics: (batchId: number) => `${bam}/subtopic/removebybatch/${batchId}/`,
       isPopulated: (batchId: number) => `${bam}/subtopic/ispopulated/${batchId}/`
    },

    addsubtopics: {
      getBatchSubtopicsUrl: (batchId: number, pageNumber: number, pageSize: number) =>
                      `${bam}/calendar/subtopicspagination/${batchId}/${pageSize}/${pageNumber}`,
      getBatchIdUrl: (batchId: number) => `${bam}/batches/byid/${batchId}`,
      addSubtopicUrl: () => `${bam}/subtopic/addsubtopic`,
      getSubtopicPoolUrl: () => `${bam}/curriculum/topicpool`,
      updateDateUrl: (subtopicId: number, batchId: number, date: number) =>
                      `${bam}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`
  }
};
