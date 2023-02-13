import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { emailVerification } from '../../../actions/user-actions';

function EmailVerification() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {_id} = useParams()
    useEffect(() => {
        console.log(_id)
        const data = dispatch(emailVerification({_id}))
        navigate("/")
    }, []);
 
}

export default EmailVerification