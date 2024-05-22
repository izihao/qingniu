
import router from'./router'
import {useCounterStore} from '@/stores/counter'
router.beforeEach((to,from,next)=>{
    const store=useCounterStore()
    console.log(111);
    const token=store.token
    if(to.path==='/login'){
        next()
    }else{
        if(token){
            next()
        }else{
            next('/login')
        }
    }
})