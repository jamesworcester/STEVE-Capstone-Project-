/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMetric = /* GraphQL */ `
  mutation CreateMetric($input: CreateMetricInput!) {
    createMetric(input: $input) {
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
export const createProject_Metric = /* GraphQL */ `
  mutation CreateProject_Metric($input: CreateProject_MetricInput!) {
    createProject_Metric(input: $input) {
      id
      project_id
      metric_id
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
      client_id
      name
      description
    }
  }
`;
export const createTeam_Project = /* GraphQL */ `
  mutation CreateTeam_Project($input: CreateTeam_ProjectInput!) {
    createTeam_Project(input: $input) {
      id
      team_id
      project_id
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam($input: CreateTeamInput!) {
    createTeam(input: $input) {
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
export const createTeam_Survey = /* GraphQL */ `
  mutation CreateTeam_Survey($input: CreateTeam_SurveyInput!) {
    createTeam_Survey(input: $input) {
      id
      team_id
      assigned_survey_id
    }
  }
`;
export const createAssigned_Survey = /* GraphQL */ `
  mutation CreateAssigned_Survey($input: CreateAssigned_SurveyInput!) {
    createAssigned_Survey(input: $input) {
      id
      survey_id
      assigned_to
      assigned_by
      assigned_date_time
      end_assignment
      frequency_of_survey_days
      answered_date_time
    }
  }
`;
export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey($input: CreateSurveyInput!) {
    createSurvey(input: $input) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const createSurvey_Question = /* GraphQL */ `
  mutation CreateSurvey_Question($input: CreateSurvey_QuestionInput!) {
    createSurvey_Question(input: $input) {
      id
      survey_id
      question_id
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      created_by
      question_type
      question_text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const createQuestion_Answer = /* GraphQL */ `
  mutation CreateQuestion_Answer($input: CreateQuestion_AnswerInput!) {
    createQuestion_Answer(input: $input) {
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
export const createTeam_Membership = /* GraphQL */ `
  mutation CreateTeam_Membership($input: CreateTeam_MembershipInput!) {
    createTeam_Membership(input: $input) {
      id
      user_id
      team_id
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient($input: CreateClientInput!) {
    createClient(input: $input) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress($input: CreateAddressInput!) {
    createAddress(input: $input) {
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
export const createPostcode = /* GraphQL */ `
  mutation CreatePostcode($input: CreatePostcodeInput!) {
    createPostcode(input: $input) {
      id
      region_id
      postcode
    }
  }
`;
export const createRegion = /* GraphQL */ `
  mutation CreateRegion($input: CreateRegionInput!) {
    createRegion(input: $input) {
      id
      country_id
      name
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry($input: CreateCountryInput!) {
    createCountry(input: $input) {
      id
      name
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
    }
  }
`;
export const createUser_Role = /* GraphQL */ `
  mutation CreateUser_Role($input: CreateUser_RoleInput!) {
    createUser_Role(input: $input) {
      id
      user_id
      role_id
    }
  }
`;
export const createRole = /* GraphQL */ `
  mutation CreateRole($input: CreateRoleInput!) {
    createRole(input: $input) {
      id
      access_level
      name
      description
    }
  }
`;
export const createUser_Department = /* GraphQL */ `
  mutation CreateUser_Department($input: CreateUser_DepartmentInput!) {
    createUser_Department(input: $input) {
      id
      user_id
      department_id
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment($input: CreateDepartmentInput!) {
    createDepartment(input: $input) {
      id
      name
      description
    }
  }
`;
export const createAssigned_TaskAchievement = /* GraphQL */ `
  mutation CreateAssigned_TaskAchievement(
    $input: CreateAssigned_TaskAchievementInput!
  ) {
    createAssigned_TaskAchievement(input: $input) {
      id
      user_id
      taskachievement_id
      assigned_date_time
      end_on
      is_completed
    }
  }
`;
export const createTaskAchievement = /* GraphQL */ `
  mutation CreateTaskAchievement($input: CreateTaskAchievementInput!) {
    createTaskAchievement(input: $input) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const createTaskAchievement_Reward = /* GraphQL */ `
  mutation CreateTaskAchievement_Reward(
    $input: CreateTaskAchievement_RewardInput!
  ) {
    createTaskAchievement_Reward(input: $input) {
      id
      taskachievement_id
      reward_id
    }
  }
`;
export const createReward = /* GraphQL */ `
  mutation CreateReward($input: CreateRewardInput!) {
    createReward(input: $input) {
      id
      created_by
      name
      text
      points
    }
  }
`;
export const createUser_Setting = /* GraphQL */ `
  mutation CreateUser_Setting($input: CreateUser_SettingInput!) {
    createUser_Setting(input: $input) {
      id
      user_id
      setting_id
    }
  }
`;
export const createSetting = /* GraphQL */ `
  mutation CreateSetting($input: CreateSettingInput!) {
    createSetting(input: $input) {
      id
      name
      setting_type
      status
      description
    }
  }
`;
export const createUser_Notification = /* GraphQL */ `
  mutation CreateUser_Notification($input: CreateUser_NotificationInput!) {
    createUser_Notification(input: $input) {
      id
      user_id
      notification_id
      sent_date_time
      is_dismissed
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification($input: CreateNotificationInput!) {
    createNotification(input: $input) {
      id
      name
      notification_type
      text
    }
  }
`;
export const createModerator = /* GraphQL */ `
  mutation CreateModerator($input: CreateModeratorInput!) {
    createModerator(input: $input) {
      id
      channel_id
      user_id
    }
  }
`;
export const createSubscription = /* GraphQL */ `
  mutation CreateSubscription($input: CreateSubscriptionInput!) {
    createSubscription(input: $input) {
      id
      user_id
      channel_id
      notifications
    }
  }
`;
export const createChannel = /* GraphQL */ `
  mutation CreateChannel($input: CreateChannelInput!) {
    createChannel(input: $input) {
      id
      channel_type
      channel_text
      description
      picture_filename
      picture_data
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
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
export const updateMetric = /* GraphQL */ `
  mutation UpdateMetric($input: CreateMetricInput!) {
    updateMetric(input: $input) {
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
export const updateProject_Metric = /* GraphQL */ `
  mutation UpdateProject_Metric($input: CreateProject_MetricInput!) {
    updateProject_Metric(input: $input) {
      id
      project_id
      metric_id
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject($input: CreateProjectInput!) {
    updateProject(input: $input) {
      id
      client_id
      name
      description
    }
  }
`;
export const updateTeam_Project = /* GraphQL */ `
  mutation UpdateTeam_Project($input: CreateTeam_ProjectInput!) {
    updateTeam_Project(input: $input) {
      id
      team_id
      project_id
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam($input: CreateTeamInput!) {
    updateTeam(input: $input) {
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
export const updateTeam_Survey = /* GraphQL */ `
  mutation UpdateTeam_Survey($input: CreateTeam_SurveyInput!) {
    updateTeam_Survey(input: $input) {
      id
      team_id
      assigned_survey_id
    }
  }
`;
export const updateAssigned_Survey = /* GraphQL */ `
  mutation UpdateAssigned_Survey($input: CreateAssigned_SurveyInput!) {
    updateAssigned_Survey(input: $input) {
      id
      survey_id
      assigned_to
      assigned_by
      assigned_date_time
      end_assignment
      frequency_of_survey_days
      answered_date_time
    }
  }
`;
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey($input: CreateSurveyInput!) {
    updateSurvey(input: $input) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const updateSurvey_Question = /* GraphQL */ `
  mutation UpdateSurvey_Question($input: CreateSurvey_QuestionInput!) {
    updateSurvey_Question(input: $input) {
      id
      survey_id
      question_id
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion($input: CreateQuestionInput!) {
    updateQuestion(input: $input) {
      id
      created_by
      question_type
      question_text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const updateQuestion_Answer = /* GraphQL */ `
  mutation UpdateQuestion_Answer($input: CreateQuestion_AnswerInput!) {
    updateQuestion_Answer(input: $input) {
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
export const updateTeam_Membership = /* GraphQL */ `
  mutation UpdateTeam_Membership($input: CreateTeam_MembershipInput!) {
    updateTeam_Membership(input: $input) {
      id
      user_id
      team_id
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient($input: CreateClientInput!) {
    updateClient(input: $input) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress($input: CreateAddressInput!) {
    updateAddress(input: $input) {
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
export const updatePostcode = /* GraphQL */ `
  mutation UpdatePostcode($input: CreatePostcodeInput!) {
    updatePostcode(input: $input) {
      id
      region_id
      postcode
    }
  }
`;
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion($input: CreateRegionInput!) {
    updateRegion(input: $input) {
      id
      country_id
      name
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry($input: CreateCountryInput!) {
    updateCountry(input: $input) {
      id
      name
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: CreateUserInput!) {
    updateUser(input: $input) {
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
    }
  }
`;
export const updateUser_Role = /* GraphQL */ `
  mutation UpdateUser_Role($input: CreateUser_RoleInput!) {
    updateUser_Role(input: $input) {
      id
      user_id
      role_id
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole($input: CreateRoleInput!) {
    updateRole(input: $input) {
      id
      access_level
      name
      description
    }
  }
`;
export const updateUser_Department = /* GraphQL */ `
  mutation UpdateUser_Department($input: CreateUser_DepartmentInput!) {
    updateUser_Department(input: $input) {
      id
      user_id
      department_id
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment($input: CreateDepartmentInput!) {
    updateDepartment(input: $input) {
      id
      name
      description
    }
  }
`;
export const updateAssigned_TaskAchievement = /* GraphQL */ `
  mutation UpdateAssigned_TaskAchievement(
    $input: CreateAssigned_TaskAchievementInput!
  ) {
    updateAssigned_TaskAchievement(input: $input) {
      id
      user_id
      taskachievement_id
      assigned_date_time
      end_on
      is_completed
    }
  }
`;
export const updateTaskAchievement = /* GraphQL */ `
  mutation UpdateTaskAchievement($input: CreateTaskAchievementInput!) {
    updateTaskAchievement(input: $input) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const updateTaskAchievement_Reward = /* GraphQL */ `
  mutation UpdateTaskAchievement_Reward(
    $input: CreateTaskAchievement_RewardInput!
  ) {
    updateTaskAchievement_Reward(input: $input) {
      id
      taskachievement_id
      reward_id
    }
  }
`;
export const updateReward = /* GraphQL */ `
  mutation UpdateReward($input: CreateRewardInput!) {
    updateReward(input: $input) {
      id
      created_by
      name
      text
      points
    }
  }
`;
export const updateUser_Setting = /* GraphQL */ `
  mutation UpdateUser_Setting($input: CreateUser_SettingInput!) {
    updateUser_Setting(input: $input) {
      id
      user_id
      setting_id
    }
  }
`;
export const updateSetting = /* GraphQL */ `
  mutation UpdateSetting($input: CreateSettingInput!) {
    updateSetting(input: $input) {
      id
      name
      setting_type
      status
      description
    }
  }
`;
export const updateUser_Notification = /* GraphQL */ `
  mutation UpdateUser_Notification($input: CreateUser_NotificationInput!) {
    updateUser_Notification(input: $input) {
      id
      user_id
      notification_id
      sent_date_time
      is_dismissed
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification($input: CreateNotificationInput!) {
    updateNotification(input: $input) {
      id
      name
      notification_type
      text
    }
  }
`;
export const updateModerator = /* GraphQL */ `
  mutation UpdateModerator($input: CreateModeratorInput!) {
    updateModerator(input: $input) {
      id
      channel_id
      user_id
    }
  }
`;
export const updateSubscription = /* GraphQL */ `
  mutation UpdateSubscription($input: CreateSubscriptionInput!) {
    updateSubscription(input: $input) {
      id
      user_id
      channel_id
      notifications
    }
  }
`;
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel($input: CreateChannelInput!) {
    updateChannel(input: $input) {
      id
      channel_type
      channel_text
      description
      picture_filename
      picture_data
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: CreatePostInput!) {
    updatePost(input: $input) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: CreateCommentInput!) {
    updateComment(input: $input) {
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
export const deleteMetric = /* GraphQL */ `
  mutation DeleteMetric($input: DeleteMetricInput!) {
    deleteMetric(input: $input) {
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
export const deleteProject_Metric = /* GraphQL */ `
  mutation DeleteProject_Metric($input: DeleteProject_MetricInput!) {
    deleteProject_Metric(input: $input) {
      id
      project_id
      metric_id
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      id
      client_id
      name
      description
    }
  }
`;
export const deleteTeam_Project = /* GraphQL */ `
  mutation DeleteTeam_Project($input: DeleteTeam_ProjectInput!) {
    deleteTeam_Project(input: $input) {
      id
      team_id
      project_id
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam($input: DeleteTeamInput!) {
    deleteTeam(input: $input) {
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
export const deleteTeam_Survey = /* GraphQL */ `
  mutation DeleteTeam_Survey($input: DeleteTeam_SurveyInput!) {
    deleteTeam_Survey(input: $input) {
      id
      team_id
      assigned_survey_id
    }
  }
`;
export const deleteAssigned_Survey = /* GraphQL */ `
  mutation DeleteAssigned_Survey($input: DeleteAssigned_SurveyInput!) {
    deleteAssigned_Survey(input: $input) {
      id
      survey_id
      assigned_to
      assigned_by
      assigned_date_time
      end_assignment
      frequency_of_survey_days
      answered_date_time
    }
  }
`;
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey($input: DeleteSurveyInput!) {
    deleteSurvey(input: $input) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const deleteSurvey_Question = /* GraphQL */ `
  mutation DeleteSurvey_Question($input: DeleteSurvey_QuestionInput!) {
    deleteSurvey_Question(input: $input) {
      id
      survey_id
      question_id
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion($input: DeleteQuestionInput!) {
    deleteQuestion(input: $input) {
      id
      created_by
      question_type
      question_text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const deleteQuestion_Answer = /* GraphQL */ `
  mutation DeleteQuestion_Answer($input: DeleteQuestion_AnswerInput!) {
    deleteQuestion_Answer(input: $input) {
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
export const deleteTeam_Membership = /* GraphQL */ `
  mutation DeleteTeam_Membership($input: DeleteTeam_MembershipInput!) {
    deleteTeam_Membership(input: $input) {
      id
      user_id
      team_id
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient($input: DeleteClientInput!) {
    deleteClient(input: $input) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress($input: DeleteAddressInput!) {
    deleteAddress(input: $input) {
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
export const deletePostcode = /* GraphQL */ `
  mutation DeletePostcode($input: DeletePostcodeInput!) {
    deletePostcode(input: $input) {
      id
      region_id
      postcode
    }
  }
`;
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion($input: DeleteRegionInput!) {
    deleteRegion(input: $input) {
      id
      country_id
      name
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry($input: DeleteCountryInput!) {
    deleteCountry(input: $input) {
      id
      name
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
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
    }
  }
`;
export const deleteUser_Role = /* GraphQL */ `
  mutation DeleteUser_Role($input: DeleteUser_RoleInput!) {
    deleteUser_Role(input: $input) {
      id
      user_id
      role_id
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole($input: DeleteRoleInput!) {
    deleteRole(input: $input) {
      id
      access_level
      name
      description
    }
  }
`;
export const deleteUser_Department = /* GraphQL */ `
  mutation DeleteUser_Department($input: DeleteUser_DepartmentInput!) {
    deleteUser_Department(input: $input) {
      id
      user_id
      department_id
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment($input: DeleteDepartmentInput!) {
    deleteDepartment(input: $input) {
      id
      name
      description
    }
  }
`;
export const deleteAssigned_TaskAchievement = /* GraphQL */ `
  mutation DeleteAssigned_TaskAchievement(
    $input: DeleteAssigned_TaskAchievementInput!
  ) {
    deleteAssigned_TaskAchievement(input: $input) {
      id
      user_id
      taskachievement_id
      assigned_date_time
      end_on
      is_completed
    }
  }
`;
export const deleteTaskAchievement = /* GraphQL */ `
  mutation DeleteTaskAchievement($input: DeleteTaskAchievementInput!) {
    deleteTaskAchievement(input: $input) {
      id
      created_by
      text
      is_archived
      created_date_time
      archived_date_time
    }
  }
`;
export const deleteTaskAchievement_Reward = /* GraphQL */ `
  mutation DeleteTaskAchievement_Reward(
    $input: DeleteTaskAchievement_RewardInput!
  ) {
    deleteTaskAchievement_Reward(input: $input) {
      id
      taskachievement_id
      reward_id
    }
  }
`;
export const deleteReward = /* GraphQL */ `
  mutation DeleteReward($input: DeleteRewardInput!) {
    deleteReward(input: $input) {
      id
      created_by
      name
      text
      points
    }
  }
`;
export const deleteUser_Setting = /* GraphQL */ `
  mutation DeleteUser_Setting($input: DeleteUser_SettingInput!) {
    deleteUser_Setting(input: $input) {
      id
      user_id
      setting_id
    }
  }
`;
export const deleteSetting = /* GraphQL */ `
  mutation DeleteSetting($input: DeleteSettingInput!) {
    deleteSetting(input: $input) {
      id
      name
      setting_type
      status
      description
    }
  }
`;
export const deleteUser_Notification = /* GraphQL */ `
  mutation DeleteUser_Notification($input: DeleteUser_NotificationInput!) {
    deleteUser_Notification(input: $input) {
      id
      user_id
      notification_id
      sent_date_time
      is_dismissed
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification($input: DeleteNotificationInput!) {
    deleteNotification(input: $input) {
      id
      name
      notification_type
      text
    }
  }
`;
export const deleteModerator = /* GraphQL */ `
  mutation DeleteModerator($input: DeleteModeratorInput!) {
    deleteModerator(input: $input) {
      id
      channel_id
      user_id
    }
  }
`;
export const deleteSubscription = /* GraphQL */ `
  mutation DeleteSubscription($input: DeleteSubscriptionInput!) {
    deleteSubscription(input: $input) {
      id
      user_id
      channel_id
      notifications
    }
  }
`;
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel($input: DeleteChannelInput!) {
    deleteChannel(input: $input) {
      id
      channel_type
      channel_text
      description
      picture_filename
      picture_data
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
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
