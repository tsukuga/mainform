import React, { Component } from 'react';

export default class Result extends React.Component{

      constructor() {
        super();
        this.state = {}
      }

      render(){

        return (

      <React.Fragment>
        <div id="wrapper">
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                  <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group"></div>
                  </form>
                  <ul className="nav navbar-nav flex-nowrap ml-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search"></i></a>
                      <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto navbar-search w-100">
                          <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-xl-3 mb-4">
                      <div className="card shadow border-left-info py-2">
                        <div className="card-body">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <div className="text-uppercase text-info font-weight-bold text-xs mb-1" style={{fontSize: 25+'px'}}><span style={{color: '#7e4fad'}}>必修科目</span></div>
                            </div>
                            <div className="col" style={{color: '#7e4fad'}}><span style={{fontSize: 37+'px'}}>33</span><span style={{fontSize: 37+'px'}}>/</span><span style={{fontSize: 37+'px'}}>33</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-4">
                      <div className="card shadow border-left-info py-2">
                        <div className="card-body">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <div className="text-uppercase text-info font-weight-bold text-xs mb-1" style={{fontSize: 25+'px'}}><span style={{color: '#7e4fad'}}>必修科目</span></div>
                            </div>
                            <div className="col" style={{color: '#7e4fad'}}><span style={{fontSize: 37+'px'}}>33</span><span style={{fontSize: 37+'px'}}>/</span><span style={{fontSize: 37+'px'}}>33</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-4">
                      <div className="card shadow border-left-info py-2">
                        <div className="card-body">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <div className="text-uppercase text-info font-weight-bold text-xs mb-1" style={{fontSize: 25+'px'}}><span style={{color: '#7e4fad'}}>必修科目</span></div>
                            </div>
                            <div className="col" style={{color: '#7e4fad'}}><span style={{fontSize: 37+'px'}}>33</span><span style={{fontSize: 37+'px'}}>/</span><span style={{fontSize: 37+'px'}}>33</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-4">
                      <div className="card shadow border-left-info py-2">
                        <div className="card-body">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                             <div className="text-uppercase text-info font-weight-bold text-xs mb-1" style={{fontSize: 25+'px'}}><span style={{color: '#7e4fad'}}>必修科目</span></div>
                            </div>
                            <div className="col" style={{color: '#7e4fad'}}><span style={{fontSize: 37+'px'}}>33</span><span style={{fontSize: 37+'px'}}>/</span><span style={{fontSize: 37+'px'}}>33</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>
          </div>
          
         <div className="card-body" style={{paddingBottom: 0+'px'}}>
    <div className="row align-items-center no-gutters">
        <div className="col mr-2">
            <div className="row align-items-center no-gutters">
                <div className="col mr-2">
                    <div className="text-uppercase text-info font-weight-bold text-xs mb-1"><span style={{fontSize: 25+'px'},{color: '#7e4fad'}}>専門科目</span></div>
                </div>
                <div className="col text-right"><span style={{fontSize: 22+'px'}}>45</span><span style={{fontSize: 22+'px'}}>/</span><span style={{fontSize: 22+'px'}}>45</span></div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="table-responsive">
                <table className="table">
                    <thead style={{height: 21+'px'}}>
                        <tr>
                            <th style={{height: 21+'px'},{paddingTop: 0+'px'},{paddingBottom: 0+'px'},{color: '#7e4fad'}}><strong>卒業論文</strong></th>
                            <th style={{height: 21+'px'},{paddingTop: 0+'px'},{paddingBottom: 0+'px'}}></th>
                            <th className="text-right" style={{height: 21+'px'},{paddingTop: 0+'px'}}>
                            <span style={{paddingTop: 0+'px'},{paddingBottom: 0+'px'}}>6</span><span style={{paddingTop: 0+'px'},{paddingBottom: 0+'px'}}>/
                            </span><span style={{paddingTop: 0+'px'},{paddingBottom: 0+'px'}}>6</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{height: 20+'px'}}>
                            <td className="text-left width20" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>BC14908</td>
                            <td className="text-left width60" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>卒業論文</td>
                            <td className="text-right width20" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>2</td>
                        </tr>
                        <tr style={{height: 20+'px'}}>
                            <td className="text-left width20" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>BC14908</td>
                            <td className="text-left width60" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>English Discussion Seminar II</td>
                            <td className="text-right width20" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>2</td>
                        </tr>
                        <tr style={{height: 20+'px'}}>
                            <td className="text-left width20" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>BC14908</td>
                            <td className="text-left width60" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>応用数学</td>
                            <td className="text-right width20" style={{paddingTop: 2+'px'},{paddingBottom: 2+'px'},{height: 19+'px'}}>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
      </React.Fragment>
    )

       }
      }
