/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const testProjectMetric = /* GraphQL */ `
  query TestProjectMetric {
    testProjectMetric {
      id
      client_id
      name
      description
    }
  }
`;
export const testQuery = /* GraphQL */ `
  query TestQuery($id: ID!) {
    testQuery(id: $id) {
      Project {
        id
        client_id
        name
        description
      }
      Project_Metric {
        id
        project_id
        metric_id
      }
    }
  }
`;
export const listProjectsAndMetrics = /* GraphQL */ `
  query ListProjectsAndMetrics($id: ID!) {
    listProjectsAndMetrics(id: $id) {
      id
      client_id
      name
      description
    }
  }
`;
export const getMetric = /* GraphQL */ `
  query GetMetric($id: ID!) {
    getMetric(id: $id) {
      id
      metric_type
      text
      formula
      is_archived
      answer_number
      answer_string
    }
  }
`;
export const getProject_Metric = /* GraphQL */ `
  query GetProject_Metric($id: ID!) {
    getProject_Metric(id: $id) {
      id
      project_id
      metric_id
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      client_id
      name
      description
    }
  }
`;
export const getTeam_Project = /* GraphQL */ `
  query GetTeam_Project($id: ID!) {
    getTeam_Project(id: $id) {
      id
      team_id
      project_id
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      team_manager
      name
      photo_filename
      photo_data
      description
      is_archived
    }
  }
`;
export const getTeam_Survey = /* GraphQL */ `
  query GetTeam_Survey($id: ID!) {
    getTeam_Survey(id: $id) {
      id
      team_id
      assigned_survey_id
    }
  }
`;
export const getAssigned_Survey = /* GraphQL */ `
  query GetAssigned_Survey($id: ID!) {
    getAssigned_Survey(id: $id) {
      id
      survey_id
      assigned_to
      assigned_by
      assigned_date_time
      end_assignment
      frequency_of_survey_days
      answered_date_time
      assigned_team
    }
  }
`;
export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const getSurvey_Question = /* GraphQL */ `
  query GetSurvey_Question($id: ID!) {
    getSurvey_Question(id: $id) {
      id
      survey_id
      question_id
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      created_by
      question_type
      question_text
      is_archived
      created_date_time
      archived_date_time
      question_number
    }
  }
`;
export const getQuestion_Answer = /* GraphQL */ `
  query GetQuestion_Answer($id: ID!) {
    getQuestion_Answer(id: $id) {
      id
      question_id
      assigned_survey_id
      user_id
      is_anonymous
      answer_number
      answer_string
      answered_date_time
    }
  }
`;
export const getTeam_Membership = /* GraphQL */ `
  query GetTeam_Membership($id: ID!) {
    getTeam_Membership(id: $id) {
      id
      user_id
      team_id
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      address_id
      name
      photo_filename
      photo_data
      industry
      contact_first_name
      contact_last_name
      contact_email
      contact_phone
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      client_id
      postcode_id
      street_number
      street_name
      apartment_number
      level
      photo_filename
      photo_data
    }
  }
`;
export const getPostcode = /* GraphQL */ `
  query GetPostcode($id: ID!) {
    getPostcode(id: $id) {
      id
      region_id
      postcode
    }
  }
`;
export const getRegion = /* GraphQL */ `
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
      id
      country_id
      name
    }
  }
`;
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      name
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      address_id
      user_role_id
      user_department_id
      email
      phone
      password
      first_name
      last_name
      photo_filename
      photo_data
      birthday
      gender
      is_archived
      description
      speciality
      working_from
      points
      first_login
    }
  }
`;
export const getUser_Role = /* GraphQL */ `
  query GetUser_Role($id: ID!) {
    getUser_Role(id: $id) {
      id
      user_id
      role_id
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
      id
      access_level
      name
      description
    }
  }
`;
export const getUser_Department = /* GraphQL */ `
  query GetUser_Department($id: ID!) {
    getUser_Department(id: $id) {
      id
      user_id
      department_id
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      name
      description
    }
  }
`;
export const getAssigned_TaskAchievement = /* GraphQL */ `
  query GetAssigned_TaskAchievement($id: ID!) {
    getAssigned_TaskAchievement(id: $id) {
      id
      user_id
      taskachievement_id
      assigned_date_time
      end_on
      is_completed
    }
  }
`;
export const getTaskAchievement = /* GraphQL */ `
  query GetTaskAchievement($id: ID!) {
    getTaskAchievement(id: $id) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const getTaskAchievement_Reward = /* GraphQL */ `
  query GetTaskAchievement_Reward($id: ID!) {
    getTaskAchievement_Reward(id: $id) {
      id
      taskachievement_id
      reward_id
    }
  }
`;
export const getReward = /* GraphQL */ `
  query GetReward($id: ID!) {
    getReward(id: $id) {
      id
      created_by
      name
      text
      points
    }
  }
`;
export const getUser_Setting = /* GraphQL */ `
  query GetUser_Setting($id: ID!) {
    getUser_Setting(id: $id) {
      id
      user_id
      setting_id
    }
  }
`;
export const getSetting = /* GraphQL */ `
  query GetSetting($id: ID!) {
    getSetting(id: $id) {
      id
      name
      setting_type
      status
      description
    }
  }
`;
export const getUser_Notification = /* GraphQL */ `
  query GetUser_Notification($id: ID!) {
    getUser_Notification(id: $id) {
      id
      user_id
      notification_id
      sent_date_time
      is_dismissed
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      name
      notification_type
      text
    }
  }
`;
export const getModerator = /* GraphQL */ `
  query GetModerator($id: ID!) {
    getModerator(id: $id) {
      id
      channel_id
      user_id
    }
  }
`;
export const getSubscription = /* GraphQL */ `
  query GetSubscription($id: ID!) {
    getSubscription(id: $id) {
      id
      user_id
      channel_id
      notifications
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      channel_type
      channel_text
      description
      picture_filename
      picture_data
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      channel_id
      user_id
      content
      created_date_time
      edited_date_time
      archived_date_time
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post_id
      user_id
      content
      created_date_time
      edited_date_time
      archived_date_time
    }
  }
`;
export const listJoinSurveyANDAssigned_Survey = /* GraphQL */ `
  query ListJoinSurveyANDAssigned_Survey($id: ID!) {
    listJoinSurveyANDAssigned_Survey(id: $id) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
      assigned_team
    }
  }
`;
export const listMetrics = /* GraphQL */ `
  query ListMetrics {
    listMetrics {
      id
      metric_type
      text
      formula
      is_archived
      answer_number
      answer_string
    }
  }
`;
export const listProject_Metrics = /* GraphQL */ `
  query ListProject_Metrics {
    listProject_Metrics {
      id
      project_id
      metric_id
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects {
    listProjects {
      id
      client_id
      name
      description
    }
  }
`;
export const listTeam_Projects = /* GraphQL */ `
  query ListTeam_Projects {
    listTeam_Projects {
      id
      team_id
      project_id
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams {
    listTeams {
      id
      team_manager
      name
      photo_filename
      photo_data
      description
      is_archived
    }
  }
`;
export const listTeam_Surveys = /* GraphQL */ `
  query ListTeam_Surveys {
    listTeam_Surveys {
      id
      team_id
      assigned_survey_id
    }
  }
`;
export const listAssigned_Surveys = /* GraphQL */ `
  query ListAssigned_Surveys {
    listAssigned_Surveys {
      id
      survey_id
      assigned_to
      assigned_by
      assigned_date_time
      end_assignment
      frequency_of_survey_days
      answered_date_time
      assigned_team
    }
  }
`;
export const listAssigned_SurveysFORUser = /* GraphQL */ `
  query ListAssigned_SurveysFORUser($assigned_to: String) {
    listAssigned_SurveysFORUser(assigned_to: $assigned_to) {
      id
      survey_id
      assigned_to
      assigned_by
      assigned_date_time
      answered_date_time
      assigned_team
      text
    }
  }
`;
export const listAssigned_SurveysWithDistinctsurvey_id = /* GraphQL */ `
  query ListAssigned_SurveysWithDistinctsurvey_id {
    listAssigned_SurveysWithDistinctsurvey_id {
      id
      survey_id
      assigned_to
      assigned_by
      assigned_date_time
      end_assignment
      frequency_of_survey_days
      answered_date_time
      assigned_team
    }
  }
`;
export const listSurveys = /* GraphQL */ `
  query ListSurveys {
    listSurveys {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const listSurvey_Questions = /* GraphQL */ `
  query ListSurvey_Questions {
    listSurvey_Questions {
      id
      survey_id
      question_id
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions {
    listQuestions {
      id
      created_by
      question_type
      question_text
      is_archived
      created_date_time
      archived_date_time
      question_number
    }
  }
`;
export const listJoinQuestionANDSurvey_Questions = /* GraphQL */ `
  query ListJoinQuestionANDSurvey_Questions($survey_id: String) {
    listJoinQuestionANDSurvey_Questions(survey_id: $survey_id) {
      id
      created_by
      question_type
      question_text
      is_archived
      created_date_time
      archived_date_time
      question_number
      survey_id
    }
  }
`;
export const listQuestion_Answers = /* GraphQL */ `
  query ListQuestion_Answers {
    listQuestion_Answers {
      id
      question_id
      assigned_survey_id
      user_id
      is_anonymous
      answer_number
      answer_string
      answered_date_time
    }
  }
`;
export const listTeam_Memberships = /* GraphQL */ `
  query ListTeam_Memberships {
    listTeam_Memberships {
      id
      user_id
      team_id
    }
  }
`;
export const listTeam_MembershipsWhere = /* GraphQL */ `
  query ListTeam_MembershipsWhere($team_id: String, $user_id: String) {
    listTeam_MembershipsWhere(team_id: $team_id, user_id: $user_id) {
      id
      user_id
      team_id
    }
  }
`;
export const listTeam_MembershipsWhereTeamID = /* GraphQL */ `
  query ListTeam_MembershipsWhereTeamID($team_id: String) {
    listTeam_MembershipsWhereTeamID(team_id: $team_id) {
      id
      user_id
      team_id
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients {
    listClients {
      id
      address_id
      name
      photo_filename
      photo_data
      industry
      contact_first_name
      contact_last_name
      contact_email
      contact_phone
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses {
    listAddresses {
      id
      client_id
      postcode_id
      street_number
      street_name
      apartment_number
      level
      photo_filename
      photo_data
    }
  }
`;
export const listPostcodes = /* GraphQL */ `
  query ListPostcodes {
    listPostcodes {
      id
      region_id
      postcode
    }
  }
`;
export const listRegions = /* GraphQL */ `
  query ListRegions {
    listRegions {
      id
      country_id
      name
    }
  }
`;
export const listCountries = /* GraphQL */ `
  query ListCountries {
    listCountries {
      id
      name
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers {
    listUsers {
      id
      address_id
      user_role_id
      user_department_id
      email
      phone
      password
      first_name
      last_name
      photo_filename
      photo_data
      birthday
      gender
      is_archived
      description
      speciality
      working_from
      points
      first_login
    }
  }
`;
export const listUsersInTeam = /* GraphQL */ `
  query ListUsersInTeam($team_id: String!) {
    listUsersInTeam(team_id: $team_id) {
      id
      address_id
      user_role_id
      user_department_id
      email
      phone
      password
      first_name
      last_name
      photo_filename
      photo_data
      birthday
      gender
      is_archived
      description
      speciality
      working_from
      points
      first_login
    }
  }
`;
export const listUsersNOTInTeam = /* GraphQL */ `
  query ListUsersNOTInTeam($team_id: String!) {
    listUsersNOTInTeam(team_id: $team_id) {
      id
      address_id
      user_role_id
      user_department_id
      email
      phone
      password
      first_name
      last_name
      photo_filename
      photo_data
      birthday
      gender
      is_archived
      description
      speciality
      working_from
      points
      first_login
    }
  }
`;
export const listUsers_Demo = /* GraphQL */ `
  query ListUsers_Demo {
    listUsers_Demo {
      id
      email
      first_name
      last_name
    }
  }
`;
export const listUser_Roles = /* GraphQL */ `
  query ListUser_Roles {
    listUser_Roles {
      id
      user_id
      role_id
    }
  }
`;
export const listRoles = /* GraphQL */ `
  query ListRoles {
    listRoles {
      id
      access_level
      name
      description
    }
  }
`;
export const listUser_Departments = /* GraphQL */ `
  query ListUser_Departments {
    listUser_Departments {
      id
      user_id
      department_id
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments {
    listDepartments {
      id
      name
      description
    }
  }
`;
export const listAssigned_TaskAchievements = /* GraphQL */ `
  query ListAssigned_TaskAchievements {
    listAssigned_TaskAchievements {
      id
      user_id
      taskachievement_id
      assigned_date_time
      end_on
      is_completed
    }
  }
`;
export const listTaskAchievements = /* GraphQL */ `
  query ListTaskAchievements {
    listTaskAchievements {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const listTaskAchievement_Rewards = /* GraphQL */ `
  query ListTaskAchievement_Rewards {
    listTaskAchievement_Rewards {
      id
      taskachievement_id
      reward_id
    }
  }
`;
export const listRewards = /* GraphQL */ `
  query ListRewards {
    listRewards {
      id
      created_by
      name
      text
      points
    }
  }
`;
export const listUser_Settings = /* GraphQL */ `
  query ListUser_Settings {
    listUser_Settings {
      id
      user_id
      setting_id
    }
  }
`;
export const listSettings = /* GraphQL */ `
  query ListSettings {
    listSettings {
      id
      name
      setting_type
      status
      description
    }
  }
`;
export const listUser_Notifications = /* GraphQL */ `
  query ListUser_Notifications {
    listUser_Notifications {
      id
      user_id
      notification_id
      sent_date_time
      is_dismissed
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications {
    listNotifications {
      id
      name
      notification_type
      text
    }
  }
`;
export const listModerators = /* GraphQL */ `
  query ListModerators {
    listModerators {
      id
      channel_id
      user_id
    }
  }
`;
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions {
    listSubscriptions {
      id
      user_id
      channel_id
      notifications
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels {
    listChannels {
      id
      channel_type
      channel_text
      description
      picture_filename
      picture_data
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts {
    listPosts {
      id
      channel_id
      user_id
      content
      created_date_time
      edited_date_time
      archived_date_time
    }
  }
`;
export const listPostsByChannel = /* GraphQL */ `
  query ListPostsByChannel($channel_id: String!) {
    listPostsByChannel(channel_id: $channel_id) {
      id
      channel_id
      user_id
      content
      created_date_time
      edited_date_time
      archived_date_time
    }
  }
`;
export const listPostsByChannelWithName = /* GraphQL */ `
  query ListPostsByChannelWithName($channel_id: String!) {
    listPostsByChannelWithName(channel_id: $channel_id) {
      id
      channel_id
      user_id
      content
      created_date_time
      edited_date_time
      archived_date_time
      first_name
      last_name
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments {
    listComments {
      id
      post_id
      user_id
      content
      created_date_time
      edited_date_time
      archived_date_time
    }
  }
`;
