import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase'

const About = () => {
    const [state, setState] = useState({
        speed: 10
    })

    useEffect(() => {
        const rootRef = firebase.database().ref()
        const speedRef = rootRef.child('speed')
        speedRef.on('value', snap => {
            console.log(snap)
            setState({
                speed: snap.val()
            })
        })
    }, [])

    return (
        <div>
            <h1>About page</h1>
            <h3>Speed: {state.speed}</h3>
        </div>
    )
}

export default About