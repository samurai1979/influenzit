import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
    name: "status",
    initialState: {
        loading: false,
        success: false,
        error: false,
        message: "",
    },
    reducers: {
        setLoading(state, { payload }) {
            state.loading = payload
        },
        setError(state, { payload }) {
            state.error = payload.error
            state.message = payload.message
        },
        setSuccess(state, { payload }) {
            state.success = payload.success;
            state.message = payload.message;
        },
    }
});
export const isLoading = (state) => state.status.loading;
export const isError = (state) => state.status.error;
export const getMessage = (state) => state.status.message;
export const isSuccess = (state) => state.status.success;
export const { setLoading, setError, setSuccess } = statusSlice.actions
export default statusSlice.reducer