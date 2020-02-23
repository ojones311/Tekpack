# Tekpack

A lot of the waste in the fashion industry comes from desingers trying to communicate fashion designs to their suppliers or factories. Factories produce samples based on a reference garment with product specs and a sketch. A "tech pack" helps them troubleshoot before any fabric is cut but many problems can arise from this stunted communication flow.

Tekpack will allow dynamic updating between designer and the supplier point of contact creating a collaborative tech pack. They can make real time updates and reduce human error to create a better communication flow between designer and factory. 

The app will have a detailed spec sheet and picture upload for the reference garment sketch. Collaborators can also comment on the project for constant communication. 
The designer can upload or re-upload photos to change or update a design.
The tech designer can input and update spec’s according to the products. The supplier can upload samples and get approval before sending them out.

The whole process will cut down on waste in the supply chain and prevent costly mistakes in production.

## Database Structure
![image of database](https://github.com/ojones311/Tekpack/blob/master/hackathon1.png)

## API Endpoints
*  **User Auth**

Method | Endpoint | Description | Body Data
------ | -------- |  ---------- | ---------
GET    | auth/login   | Logins in user| n/a
POST   | auth/signup   | Signs up user| n/a


*  **User**

Method | Endpoint | Description | Body Data
------ | -------- |  ---------- | ---------
GET    | /user/projects | Gets all projects| n/a
GET    | /user/projects/:id| Get single project by id| n/a
GET    | /user/projects/project_name | Get project by project name   | n/a
GET    | /user/projects/templates | Gets project template| n/a
GET    | /user/projects/default | Gets default project| n/a
POST   | /user/projects/new | Add new project |
POST   | /user/projects/templates | Add new project from template |
POST   | /user/projects/:project_id | Add new project by product id |
PATCH  | /user/projects/:id | Edits a project   |        
DELETE | /user/projects/:id | Deletes a project |        


* **Sketches**

Method | Endpoint | Description | Body Data
------ | -------- |  ---------- | ---------
GET    | /sketch/:project_id | Gets a sketch by project id| n/a
POST   | /sketch/:project_id | Adds a sketch by project id| n/a
PATCH  | /sketch/:project_id |  Edits a sketch | n/a

* **Comments**

Method | Endpoint | Description | Body Data
------ | -------- |  ---------- | ---------
GET    | /comments/project_id   | Gets all comments by project id| n/a
POST   | /comments/:project_id   | Add a comment| n/a

## Who Made This?

Tekpack would not be possible without the work of our group. The developers on this web app are [Kadijah Wilson](https://github.com/KadijahW), [Jenesh Napit](https://github.com/jenesh), [Johnathan Fagan](https://github.com/Jaiden16), and [Owen Jones:](https://github.com/ojones311)

