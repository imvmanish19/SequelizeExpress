## Express With Sequelize

### SQL

Using root user in mysql is not a good practice,its easy to delete all the databases present in root.
So its better to create a new database and a new user.

- Creating a new database
```sql
create database database_name;
```

- Creating a new user
```sql
create user user_name identified by 'password';
```

- Use the new database 
```sql 
use database_name;
```

- Granting Privileges
```sql
GRANT ALL PRIVILEGES ON database_name.* to user_name;
```

- Flush
```sql
FLUSH PRIVILEGES;
```

- Exit

