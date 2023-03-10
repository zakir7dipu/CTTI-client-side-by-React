import React from 'react';
import {goToExternalLink, uid} from "../../../lib/helper";
import {Link} from "react-router-dom";

function Index({menu}) {
    return (
        <div className="col-lg-3 md-mb-30">
            <div className="footer-widget footer-widget-3">
                <h3 className="footer-title">{menu?.MenuTitel}</h3>
                <div className="footer-menu">
                    <ul>
                        {menu?.MenuLink && Array.from(menu.MenuLink).map(mLink=>{
                            return (
                                <li key={uid()}><Link to="#" onClick={(e)=>{
                                    e.preventDefault()
                                    goToExternalLink(mLink?.LinkUrl)
                                }}>{mLink?.LinkText}</Link></li>
                            )
                        })}


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Index;