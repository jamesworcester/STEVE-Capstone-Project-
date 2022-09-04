-- START OF FILE
-- create
CREATE TABLE Metric (
  id VARCHAR(255) PRIMARY KEY,
  metric_type VARCHAR(255),
  text VARCHAR(255),
  formula VARCHAR(255),
  is_archived TINYINT,
  answer_number INT(10),
  answer_string VARCHAR(255)
);

CREATE TABLE Project_Metric (
  id VARCHAR(255) PRIMARY KEY,
  project_id VARCHAR(255),
  metric_id VARCHAR(255) 
);

CREATE TABLE Project (
  id VARCHAR(255) PRIMARY KEY,
  client_id VARCHAR(255),
  name VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE Team_Project (
  id VARCHAR(255) PRIMARY KEY,
  team_id VARCHAR(255),
  project_id VARCHAR(255) 
);

CREATE TABLE Team (
  id VARCHAR(255) PRIMARY KEY,
  team_manager VARCHAR(255),
  name VARCHAR(255),
  photo_filename VARCHAR(255),
  photo_data VARBINARY(50000),
  description VARCHAR(255),
  is_archived TINYINT
);

CREATE TABLE Team_Survey (
  id VARCHAR(255) PRIMARY KEY,
  team_id VARCHAR(255),
  assigned_survey_id VARCHAR(255) 
);

CREATE TABLE Assigned_Survey (
  id VARCHAR(255) PRIMARY KEY,
  survey_id VARCHAR(255),
  assigned_to VARCHAR(255),
  assigned_by VARCHAR(255),
  assigned_date_time TIMESTAMP,
  end_assignment TIMESTAMP,
  frequency_of_survey_days INT(10),
  answered_date_time TIMESTAMP
);

CREATE TABLE Survey (
  id VARCHAR(255) PRIMARY KEY,
  created_by VARCHAR(255),
  text VARCHAR(255),
  is_archived TINYINT,
  created_date_time TIMESTAMP,
  archived_date_time TIMESTAMP
);

CREATE TABLE Survey_Question (
  id VARCHAR(255) PRIMARY KEY,
  survey_id VARCHAR(255),
  question_id VARCHAR(255) 
);

CREATE TABLE Question (
  id VARCHAR(255) PRIMARY KEY,
  created_by VARCHAR(255),
  question_type VARCHAR(255),
  question_text VARCHAR(255),
  is_archived TINYINT,
  created_date_time TIMESTAMP,
  archived_date_time TIMESTAMP
);

CREATE TABLE Question_Answer (
  id VARCHAR(255) PRIMARY KEY,
  question_id VARCHAR(255),
  assigned_survey_id VARCHAR(255),
  user_id VARCHAR(255),
  is_anonymous TINYINT,
  answer_number INT(10),
  answer_string VARCHAR(255),
  answered_date_time TIMESTAMP
);

CREATE TABLE Team_Membership (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  team_id VARCHAR(255)
);

CREATE TABLE Client (
  id VARCHAR(255) PRIMARY KEY,
  address_id VARCHAR(255),
  name VARCHAR(255),
  photo_filename VARCHAR(255),
  photo_data VARBINARY(50000),
  industry VARCHAR(255),
  contact_first_name VARCHAR(255),
  contact_last_name VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(255)
);

CREATE TABLE Address (
  id VARCHAR(255) PRIMARY KEY,
  client_id VARCHAR(255),
  postcode_id VARCHAR(255),
  street_number VARCHAR(255),
  street_name VARCHAR(255),
  apartment_number VARCHAR(255),
  level VARCHAR(255),
  photo_filename VARCHAR(255),
  photo_data VARBINARY(50000)
);

CREATE TABLE Postcode (
  id VARCHAR(255) PRIMARY KEY,
  region_id VARCHAR(255),
  postcode VARCHAR(255)
);

CREATE TABLE Region (
  id VARCHAR(255) PRIMARY KEY,
  country_id VARCHAR(255),
  name VARCHAR(255)
);

CREATE TABLE Country (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  address_id VARCHAR(255),
  user_role_id VARCHAR(255),
  user_department_id VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  password VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  photo_filename VARCHAR(255),
  photo_data VARBINARY(50000),
  birthday DATE,
  gender VARCHAR(255),
  is_archived TINYINT,
  description VARCHAR(255),
  speciality VARCHAR(255),
  working_from VARCHAR(255),
  points INT(10)
);

CREATE TABLE User_Role (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  role_id VARCHAR(255) 
);

CREATE TABLE Role (
  id VARCHAR(255) PRIMARY KEY,
  access_level VARCHAR(255),
  name VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE User_Department (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  department_id VARCHAR(255)
);

CREATE TABLE Department (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE Assigned_TaskAchievement (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  taskachievement_id VARCHAR(255),
  assigned_date_time TIMESTAMP,
  end_on TIMESTAMP,
  is_completed TINYINT
);

CREATE TABLE TaskAchievement (
  id VARCHAR(255) PRIMARY KEY,
  created_by VARCHAR(255),
  text VARCHAR(255),
  is_archived TINYINT,
  created_date_time TIMESTAMP,
  archived_date_time TIMESTAMP
);

CREATE TABLE TaskAchievement_Reward (
  id VARCHAR(255) PRIMARY KEY,
  taskachievement_id VARCHAR(255),
  reward_id VARCHAR(255) 
);

CREATE TABLE Reward (
  id VARCHAR(255) PRIMARY KEY,
  created_by VARCHAR(255),
  name VARCHAR(255),
  text VARCHAR(255),
  points INT(10)
);

CREATE TABLE User_Setting (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  setting_id VARCHAR(255) 
);

CREATE TABLE Setting (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  setting_type VARCHAR(255),
  status VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE User_Notification (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  notification_id VARCHAR(255),
  sent_date_time TIMESTAMP,
  is_dismissed TINYINT
);

CREATE TABLE Notification (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  notification_type VARCHAR(255),
  text VARCHAR(255)
);

CREATE TABLE Moderator (
  id VARCHAR(255) PRIMARY KEY,
  channel_id VARCHAR(255),
  user_id VARCHAR(255)
);

CREATE TABLE Subscription (
  id VARCHAR(255) PRIMARY KEY,
  user_id VARCHAR(255),
  channel_id VARCHAR(255),
  notifications VARCHAR(255)
);

CREATE TABLE Channel (
  id VARCHAR(255) PRIMARY KEY,
  channel_type VARCHAR(255),
  channel_text VARCHAR(255),
  description VARCHAR(255),
  picture_filename VARCHAR(255),
  picture_data VARBINARY(50000)
);

CREATE TABLE Post (
  id VARCHAR(255) PRIMARY KEY,
  channel_id VARCHAR(255),
  user_id VARCHAR(255),
  content VARCHAR(2047),
  created_date_time TIMESTAMP,
  edited_date_time TIMESTAMP,
  archived_date_time TIMESTAMP
);

CREATE TABLE Comment (
  id VARCHAR(255) PRIMARY KEY,
  post_id VARCHAR(255),
  user_id VARCHAR(255),
  content VARCHAR(2047),
  created_date_time TIMESTAMP,
  edited_date_time TIMESTAMP,
  archived_date_time TIMESTAMP
);



-- alter (FK)
ALTER TABLE Team_Project
  ADD FOREIGN KEY(team_id) REFERENCES Team(id),
  ADD FOREIGN KEY(project_id) REFERENCES Project(id);

ALTER TABLE Project_Metric
  ADD FOREIGN KEY (project_id) REFERENCES Project(id),
  ADD FOREIGN KEY (metric_id) REFERENCES Metric(id);

ALTER TABLE Project
  ADD FOREIGN KEY (client_id) REFERENCES Client(id);

ALTER TABLE Team
  ADD FOREIGN KEY (team_manager) REFERENCES User(id);

ALTER TABLE Team_Survey
  ADD FOREIGN KEY (team_id) REFERENCES Team(id),
  ADD FOREIGN KEY (assigned_survey_id) REFERENCES Assigned_Survey(id);

ALTER TABLE Assigned_Survey
  ADD FOREIGN KEY (survey_id) REFERENCES Survey(id),
  ADD FOREIGN KEY (assigned_to) REFERENCES User(id),
  ADD FOREIGN KEY (assigned_by) REFERENCES User(id);

ALTER TABLE Survey
  ADD FOREIGN KEY (created_by) REFERENCES User(id);

ALTER TABLE Survey_Question
  ADD FOREIGN KEY (survey_id) REFERENCES Survey(id),
  ADD FOREIGN KEY (question_id) REFERENCES Question(id);

ALTER TABLE Question
  ADD FOREIGN KEY (created_by) REFERENCES User(id);

ALTER TABLE Question_Answer
  ADD FOREIGN KEY (question_id) REFERENCES Question(id),
  ADD FOREIGN KEY (assigned_survey_id) REFERENCES Assigned_Survey(id),
  ADD FOREIGN KEY (user_id) REFERENCES User(id);

ALTER TABLE Team_Membership
  ADD FOREIGN KEY (user_id) REFERENCES User(id),
  ADD FOREIGN KEY (team_id) REFERENCES Team(id);

ALTER TABLE Client
  ADD FOREIGN KEY (address_id) REFERENCES Address(id);

ALTER TABLE Address
  ADD FOREIGN KEY (client_id) REFERENCES Client(id),
  ADD FOREIGN KEY (postcode_id) REFERENCES Postcode(id);

ALTER TABLE Postcode
  ADD FOREIGN KEY (region_id) REFERENCES Region(id);

ALTER TABLE Region
  ADD FOREIGN KEY (country_id) REFERENCES Country(id);

ALTER TABLE User
  ADD FOREIGN KEY (address_id) REFERENCES Address(id),
  ADD FOREIGN KEY (user_role_id) REFERENCES User_Role(id),
  ADD FOREIGN KEY (user_department_id) REFERENCES User_Department(id);

ALTER TABLE User_Role
  ADD FOREIGN KEY (user_id) REFERENCES User(id),
  ADD FOREIGN KEY (role_id) REFERENCES Role(id);
  
ALTER TABLE User_Department
  ADD FOREIGN KEY (user_id) REFERENCES User(id),
  ADD FOREIGN KEY (department_id) REFERENCES Department(id);

ALTER TABLE Assigned_TaskAchievement
  ADD FOREIGN KEY (user_id) REFERENCES User(id),
  ADD FOREIGN KEY (taskachievement_id) REFERENCES TaskAchievement(id);

ALTER TABLE TaskAchievement
  ADD FOREIGN KEY (created_by) REFERENCES User(id);

ALTER TABLE TaskAchievement_Reward
  ADD FOREIGN KEY (taskachievement_id) REFERENCES TaskAchievement(id),
  ADD FOREIGN KEY (reward_id) REFERENCES Reward(id);

ALTER TABLE Reward
  ADD FOREIGN KEY (created_by) REFERENCES User(id);

ALTER TABLE User_Setting
  ADD FOREIGN KEY (user_id) REFERENCES User(id),
  ADD FOREIGN KEY (setting_id) REFERENCES Setting(id);

ALTER TABLE User_Notification
  ADD FOREIGN KEY (user_id) REFERENCES User(id),
  ADD FOREIGN KEY (notification_id) REFERENCES Notification(id);

ALTER TABLE Subscription
  ADD FOREIGN KEY (user_id) REFERENCES User(id),
  ADD FOREIGN KEY (channel_id) REFERENCES Channel(id);

ALTER TABLE Moderator
  ADD FOREIGN KEY (channel_id) REFERENCES Channel(id),
  ADD FOREIGN KEY (user_id) REFERENCES User(id);

ALTER TABLE Post
  ADD FOREIGN KEY (channel_id) REFERENCES Channel(id),
  ADD FOREIGN KEY (user_id) REFERENCES User(id);
  
ALTER TABLE Comment
  ADD FOREIGN KEY (post_id) REFERENCES Post(id),
  ADD FOREIGN KEY (user_id) REFERENCES User(id);

-- END OF FILE