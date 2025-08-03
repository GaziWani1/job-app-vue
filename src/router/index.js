import { createRouter , createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jobs from "../views/Jobs.vue";
import NotFoundView from "../views/NotFoundView.vue";
import JobView from "../views/JobView.vue";
import AddJobView from "../views/AddJobView.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.Base_URL),
    routes:[
        {
            path : '/',
            name : 'home',
            component : HomeView
        },
        {
            path:'/jobs',
            name : 'jobs',
            component : Jobs

        },
        {
            path:'/jobs/add',
            name : 'add-job',
            component : AddJobView

        },
         {
            path:'/job/:id',
            name : 'job',
            component : JobView

        },
        {
            path : '/:catchAll(.*)',
            name : 'not-found',
            component : NotFoundView
        }
    ]
});

export default router