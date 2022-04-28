import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import ExpenseForm from "@/views/ExpenseForm.vue";
import SignUp from "@/views/SignUp.vue";
import NewTrip from "@/views/NewTrip.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import ProfileEdit from "@/views/ProfileEdit.vue";

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },{
        path: '/new-expense',
        name: "ExpenseForm",
        component: ExpenseForm,
    },{
        path: '/signup',
        name: "SignUp",
        component: SignUp,
    },{
        path: '/new-trip',
        name: "NewTrip",
        component: NewTrip,
    },{
        path: '/login',
        name: "Login",
        component: Login,
    },{
        path: '/dashboard',
        name: "Dashboard",
        component: Dashboard,
    },{
        path: '/user/edit',
        name: "ProfileEdit",
        component: ProfileEdit,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router