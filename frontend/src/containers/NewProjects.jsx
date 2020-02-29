import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const NewProjects = (props) => {
    // const [defaultTemplates] = useState([
    //     { template_id: -1, img_name: 'T-shirt', image: 'https://pluspng.com/img-png/tshirt-png-outline-blank-t-shirt-outline-1663530-1421.jpg' },
    //     { template_id: -2, img_name: 'Hoodie', image: 'https://i.ya-webdesign.com/images/hoodie-template-png-13.png' },
    //     { template_id: -3, img_name: 'Jeans', image: 'https://i.pinimg.com/originals/7e/e7/81/7ee78144307504c7de8c4b50255a0ca8.png' },
    //     { template_id: -4, img_name: 'Socks', image: 'https://media.istockphoto.com/vectors/sock-template-vector-id512011001?k=6&m=512011001&s=612x612&w=0&h=tNkOx3mG7dRj5X1rKB46mYu77ehGHtH0rsNA1GieDmk=' }
    // ])
    const [templates, setTemplates] = useState({
        userTemplates: [],
        defaultTemplates: [],
        projectName: '',
        imgUrl: ''
    })
    // console.log(`NewProject props: `, props)

    useEffect(() => {
        const getTemplates = async () => {
            try {
                // GET TEMPLATES BY USER ID
                // const { data: { payload }} = await axios.get(`/templates/${props.state.userId}`)
                const userTemplates = await axios.get(`/templates/all`)
                const defaultTemplates = await axios.get(`/default/templates/all`)
                // console.log(`Templates: `, userTemplates, defaultTemplates)
                setTemplates({ ...templates, userTemplates: userTemplates.data.payload, defaultTemplates: defaultTemplates.data.payload })
            } catch (err) {
                console.log(err)
            }
        }

        getTemplates()
    }, [])

    const templateCards = (arr, type) => {
        return arr.map(item => (
            <div className="card template-card" key={item.template_id} onClick={() => postNewProject(item.template_id, type, item.img_name, item.image)}>
                <div className="card-image">
                    <img src={item.image} alt={item.img_name} />
                </div>
                <div className="card-title">{item.img_name}</div>
            </div>
        ))
    }

    const postNewProject = async (template_id, type, description, url) => {
        console.log(`Template ID: ${template_id}`, `Type: ${type}`, `Name: ${description}`, `Project Name: ${templates.projectName}`, `Image url:  ${url}`)
        const data = { template_id, type, description, url }
        if (templates.projectName) {
            data.description = templates.projectName
        } else {
            data.description = description
        }
        if (templates.imgUrl) {
            data.url = templates.imgUrl
        } else {
            data.url = url
        }

        data.userId = props.state.user_id

        // POST A NEW PROJECT BASED ON THE PROJECT TEMPLATE_ID
        const { data: {payload } } = await axios.post(`/projects/new`, { data })
        console.log("payload",payload)

        // RETURN THE NEW PROJECT_ID
        // ON SUCCESS call function pushToSpecForm which is setup below

        pushToSpecForm(payload[0].projects_id)
    }

    const pushToSpecForm = (projectId) => {
        props.history.push(`/projects/${projectId}`)
    }

    // console.log(templates)

    return (
        <div>
            <h3 className='center'>Saved Templates</h3>

            <input 
                type="text" 
                onChange={e => setTemplates({ ...templates, [e.target.name]: e.target.value })} 
                name='projectName' 
                placeholder='Project name'
            />

            <input 
                type="text" 
                onChange={e => setTemplates({ ...templates, [e.target.name]: e.target.value })} 
                name='imgUrl' 
                placeholder='Image url...'
            />

            <div className='project-templates'>
                {templateCards(templates.userTemplates, 'custom')}
            </div>

            {/* <form onSubmit={postNewProject}>
                <input type="text" placeholder="img name"></input>
                <input type="text" placeholder="img url"></input>
                <button type="submit"> Submit </button>
            </form>  */}

            <hr />
            <h3 className='center'>Default Templates</h3>
            <div className='project-templates project-templates-default'>
                {templateCards(templates.defaultTemplates, 'default')}
            </div>

        </div >
    )
}

export default withRouter(NewProjects)
