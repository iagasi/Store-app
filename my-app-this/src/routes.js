import Admin from "./components/admin-Page/Admin";
import { Basket } from "./components/basket/Basket";
import Auth from "./components/auth/Auth";
import {About} from "./components/about/About"
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { ABOUT, ADMIN_ROUTE, Basket_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRACION_ROUTE, SHOP_ROUTE } from "./utils/constants";

export const authRoutes=[

    {
        path:ADMIN_ROUTE,
        Comment:Admin
    },
    // {
    //     path:LOGIN_ROUTE,
    //     Comment:Auth
    // }
]


export const publicRoutes=[
    {
        path:SHOP_ROUTE,
        Comment:Shop
    },
    {
        path:ABOUT,
        Comment:About

    },
    {
        path:LOGIN_ROUTE,
        Comment:Auth
    },
    {
        path:REGISTRACION_ROUTE,
        Comment:Auth
    },
    {
        path:DEVICE_ROUTE+"/:id",
        Comment:DevicePage
    }
    ,{
        path:Basket_ROUTE,
        Comment:Basket
    }
]