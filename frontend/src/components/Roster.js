import React from "react";

const Roster = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="RosterRow row align-items-center justify-content-center">
                    <div className="RosterHeader d-flex justify-content-center">Team Roster</div>
                </div>
                <div className="row">
                    <div className="col-4 d-flex justify-content-center">
                    <a href="https://www.instagram.com/phamstatic/" class="btn btn-default">@Phamstatic</a> 
                    </div>
                    <div className="col-4 d-flex justify-content-center">2</div>
                    <div className="col-4 d-flex justify-content-center">3</div>
                </div>
            </div>
        </>
    );
}

export default Roster;