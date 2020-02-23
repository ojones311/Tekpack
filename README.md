# Tekpack

Right now there are many flaws of sustainability in the Fashion industry. According to the article from **[United Nation Enviroment Programme](https://www.unenvironment.org/news-and-stories/story/putting-brakes-fast-fashion)**: 

> *"Textile dyeing is the second largest polluter of water globally and it takes around 2,000 gallons of water to make a typical pair of jeans. Every second, the equivalent of one garbage truck of textiles is landfilled or burned. If nothing changes, by 2050 the fashion industry will use up a quarter of the world’s carbon budget."*

A quarter of the world's carbon budget by 2050?! That is some scarry stuff. It's impossible to completely solve the issue but we can take small initiatives and make progress towards a more sustainable future in the Fashion Industry.

So, our product is called TekPack and the problem we are solving is textile waste by targetting the back and forth process between designers and the manufactures when making samples. Each iteration of the sample costs the business money as well as adding to the textile waste problem. During this process one of the reasons for going back and forth is due to problems in the product specifications that gets sent back and forth between Designers and Manufacturers. Some of these problems are:

1. Design & Specification inaccuracy (typos, mislabels, human errors)
2. Miscommunications between the two parties (language issues, back and forth commenting, having to dig through emails)
3. Hard to manage files for each product (excel sheets, product images, and product spec sheets)

TekPack is your one stop shop to manage and keep track of product specifications and its related content seamlessly, between both parties. A simple User Interface and headache free User Experience with all the key options & features needed built into one platform. Some of the features are creating templates for forms, drag and drop image uploading, live changes in the form, auto generating pdf files & spreadsheets.

> ...


A lot of the waste in the fashion industry comes from desingers trying to communicate fashion designs to their suppliers or factories. Factories produce samples based on a reference garment with product specs and a sketch. A "tech pack" helps them troubleshoot before any fabric is cut but many problems can arise from this stunted communication flow.

Tekpack will allow dynamic updating between designer and the supplier point of contact creating a collaborative tech pack. They can make real time updates and reduce human error to create a better communication flow between designer and factory. 

The app will have a detailed spec sheet and picture upload for the reference garment sketch. Collaborators can also comment on the project for constant communication. 
The designer can upload or re-upload photos to change or update a design.
The tech designer can input and update spec’s according to the products. The supplier can upload samples and get approval before sending them out.

The whole process will cut down on waste in the supply chain and prevent costly mistakes in production.

## Database Structure
![image of database](https://github.com/ojones311/Tekpack/blob/master/assets/hackathon1.png)

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

## Frontend

#### Routes

Route  |  Feature
-----  |   -------
/      | Index route. Prompts user to log in |
/home  | Landing after user is logged in. Takes us to user home page
/newproject | Create new project page. Shows a page where you chose how you want to make a new project via template or without one 
/project/:project_key | Shows the project page you created. Page has a form to input spec data and the upload the sketch photo
/export/:project_key  | Export page. Can export just the form into excel or the form and sketch into pdf 
/contact | Contact page

## Wireframes
[Wireframes here](https://github.com/ojones311/Tekpack/blob/master/assets/wireframes)

## Who Made This?

TekPack is developed with ❤️ by [Kadijah Wilson](https://github.com/KadijahW), [Jenesh Napit](https://github.com/jenesh), [Jonathan Fagan](https://github.com/Jaiden16), and [Owen Jones](https://github.com/ojones311).

## App name ideas:
- Spec / Spek
- Send
- Sprout
- 
