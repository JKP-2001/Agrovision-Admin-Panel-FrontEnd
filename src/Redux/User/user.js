import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import showToast from "../../Utils/showToast";
// import showToast from "../../Utils/showToast"

// const url = process.env.REACT_APP_BASE_URL;
// const url = process.env.REACT_APP_BASE_DEV?process.env.REACT_APP_BASE_DEV_URL:process.env.REACT_APP_BASE_URL;
const key = "AGRI_VISION_4U"

const url = "http://localhost:5000/admin";


const initialState = {
    data:null,
    status: 'idle',
    error: "none",
    loading: false,
}


const authSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setData(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        setError(state,action){
            state.error = action.payload
        },
        setLoading(state,action){
            state.loading = action.payload
        }
    }
})

const { reducer, actions } = authSlice;

export const {setData, setError, setLoading, setStatus, setUserGroups, setAuthenticated, setUserAssignments, setCompletedAssignments} = actions;

export default reducer;


export function getAdminDetails(){
    return async function fetchProductThunk(dispatch,getState){
        try{
            dispatch(setLoading(true));
            const response = await fetch(`${url}/getadmin`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'security-key': key,
                    'auth-token': localStorage.getItem('token'),
                },
            });
            const json = await response.json();
            dispatch(setLoading(false));
            if(!json.success){
                showToast({
                    msg:`${json.error}`,
                    type:"error",
                    duration:3000,
                })
                throw new Error(json.error);
            }
            
            dispatch(setData(json.admin));

        }catch(err){
            dispatch(setError(err.toString()));
        }
    }
}




export function LoginAdmin(email,password){
    return async function fetchProductThunk(dispatch,getState){
        try{
            dispatch(setLoading(true));
            const response = await fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'security-key': key,
                },
                body: JSON.stringify({email,password}),
            });
            const json = await response.json();
            dispatch(setLoading(false));
            if(!json.success){
                showToast({
                    msg:`${json.error}`,
                    type:"error",
                    duration:3000,
                })
                throw new Error(json.error);
            }
            
            // dispatch(setData(json.token));
            localStorage.setItem('token', json.token);

            dispatch(getAdminDetails());

            showToast({
                msg:"Login Successful",
                type:"success",
                duration:3000,
            })

        }catch(err){
            dispatch(setError(err.toString()));
        }
    }
}



export function createAdmin(username,password,email,role){
    return async function fetchProductThunk(dispatch,getState){
        try{
            dispatch(setLoading(true));
            const response = await fetch(`${url}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'security-key': key,
                    'auth-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({username,password,email,role}),
            });
            const json = await response.json();
            dispatch(setLoading(false));
            if(!json.success){
                showToast({
                    msg:`${json.error}`,
                    type:"error",
                    duration:3000,
                })
                throw new Error(json.error);
            }
            
            showToast({
                msg:"Admin Created Successfully with role: "+role,
                type:"success",
                duration:3000,
            })
            // dispatch(setData(json.admin));

        }catch(err){
            dispatch(setError(err.toString()));
        }
    }
}

export function setUserToInital(){
    return async function fetchProductThunk(dispatch,getState){
        try{
            dispatch(setLoading(true));
            dispatch(setData(null));
            dispatch(setError("none"));
            dispatch(setStatus("idle"));
            dispatch(setLoading(false));
        }catch(err){
            dispatch(setError(err.toString()));
        }
    }
}