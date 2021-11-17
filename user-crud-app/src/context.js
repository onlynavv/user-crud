import React,{useContext,useReducer,useState} from 'react'

const AppContext = React.createContext()

const initialState = {
    userData:[],
    profileData:[]
}

const reducer = (state,action) => {

    if(action.type === 'ADD_USER'){
        return {...state, userData:[...state.userData, action.payload]}
    }

    if(action.type === 'EDIT_USER'){
        return {...state, userData: state.userData.map((item)=>{
            if(item.id === action.payload.id){
                return {...item, username:action.payload.singleUser.username, email:action.payload.singleUser.email, password:action.payload.singleUser.password}
            }
            return item
        })}
    }

    if(action.type === 'ADD_PROFILE'){
        return {...state, profileData: [...state.profileData, action.payload]}
    }

    if(action.type === 'EDIT_PROFILE'){
        return {...state, profileData: state.profileData.map((item)=>{
            if(item.id === action.payload.id){
                return {...item,
                    phonenumber:action.payload.userProfile.phonenumber,
                    qualification:action.payload.userProfile.qualification,
                    passyear:action.payload.userProfile.passyear,
                    experience:action.payload.userProfile.experience,
                    period:action.payload.userProfile.period,
                    github:action.payload.userProfile.github,
                    profile:action.payload.userProfile.profile,
                    location:action.payload.userProfile.location
                }
            }
            return item
        })}
    }

    return state
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [singleUser,setSingleUser] = useState({username:'',email:'',password:''})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setSingleUser({...singleUser, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {id: new Date().getTime().toString(), ...singleUser}
        dispatch({type:'ADD_USER',payload:newUser})
        setSingleUser({username:'',email:'',password:''})
    }

    const handleEdit = (e,id) => {
        e.preventDefault()
        dispatch({type:"EDIT_USER",payload:{id:id,singleUser}})
        setSingleUser({username:'',email:'',password:''})
    }

    const [userProfile,setUserProfile] = useState({phonenumber:'',qualification:'',passyear:'',experience:'',period:'',github:'',profile:'',location:''})

    const handleProfileChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserProfile({...userProfile,[name]:value})
    }

    const handleAddProfile = (e,id) => {
        e.preventDefault()
        const newUserProfile = {id:id, ...userProfile}
        dispatch({type:'ADD_PROFILE',payload:newUserProfile})
        setUserProfile({phonenumber:'',qualification:'',passyear:'',experience:'',period:'',github:'',profile:'',location:''})
    }

    const handleEditProfile = (e,id) => {
        e.preventDefault()
        dispatch({type:'EDIT_PROFILE',payload:{id:id,userProfile}})
        setUserProfile({phonenumber:'',qualification:'',passyear:'',experience:'',period:'',github:'',profile:'',location:''})
    }

    return(
        <AppContext.Provider value={{...state,handleSubmit,singleUser,setSingleUser,handleChange,handleEdit,handleAddProfile,handleProfileChange,userProfile,setUserProfile,handleEditProfile}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}