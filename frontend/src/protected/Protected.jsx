import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Toast } from '../components/reusable/Toast'

const Protected = () => {
    let auth = { 'token': false }
    return (
        auth.token ? <Outlet /> : (Toast.fire({
            icon: 'error',
            title: 'You must be logged in to view this page'
        })) && <Navigate to="/login" />
    )
}

export default Protected