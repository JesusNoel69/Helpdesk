START TRANSACTION;

# IGNORE for no duplicates

# RoleUser Seed
INSERT IGNORE INTO RoleUser (NameRole) VALUES ('Admin'), ('Engineer'), ('Technician');

# StateType Seed
INSERT IGNORE INTO StateType (NameColor) VALUES ('red'), ('bluelight'), ('yellowgreen'), ('green');
#('Open'), ('In Progress'), ('Blocked'), ('Closed');

# Priority Seed
INSERT IGNORE INTO Priority (NamePriority) VALUES ('Low'), ('Medium'), ('High');

# User Seed
INSERT IGNORE INTO User (RoleUserId, NameUser, PasswordUser, Account) VALUES
(1, 'admin', 'admin123', 'admin_account'),
(2, 'engineer', 'engineer123', 'engineer_account'),
(3, 'technician', 'technician123', 'technician_account');

# Ticket Seed
INSERT IGNORE INTO Ticket (ResponsibleId, StateId, PriorityId, Title, TimeStart, PromiseEnd, Details)
VALUES
(2, 1, 2, 'Server down', NOW(), DATE_ADD(NOW(), INTERVAL 2 DAY), 'The main server is down.');

# Comment Seed
INSERT IGNORE INTO Comment (UserId, TicketId, ValueComment) VALUES
(2, 1, 'We are investigating the issue.'),
(3, 1, 'Please solve it quickly.');

COMMIT;