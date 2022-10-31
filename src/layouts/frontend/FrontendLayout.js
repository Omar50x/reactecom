import React from "react";
import { Switch, Route } from "react-router-dom";
import PublicRouteList from "../../routes/PublicRouteList";
import Footer from "../admin/Footer";
import Navbar from "./Navbar";

const FrontendLayout = () => {
    return(
        <div>
            <Navbar />
            <div>
                <Switch>
                    {PublicRouteList.map((routedata, idx) => {
                        return(
                            routedata.component && (
                                <Route
                                    key={idx}
                                    path={routedata.path}
                                    exact={routedata.exact}
                                    name={routedata.name}
                                    render={(props) => (
                                        <routedata.component {...props} />
                                    )}
                                />
                            )
                        )
                    })}
                </Switch>
                <Footer />
            </div>
        </div>
    );
}

export default FrontendLayout;