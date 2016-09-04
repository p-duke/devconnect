class Sidemenu extends React.Component {
  render() {
    return (
        <div className="col-md-3 left_col">
          <div className="left_col scroll-view">

            <div className="navbar nav_title" style={{"border":"0"}}>
              <a href="/" className="site_title"><i className="fa fa-share-alt"></i> <span>Devconnect</span></a>
            </div>
            <div className="clearfix"></div>


            {/* <!-- menu profile quick info --> */}
            <div className="profile">
              <div className="profile_pic">
              <img src={this.props.img_src} className="img-circle profile_img"/>
              </div>
              <div className="profile_info">
                <span>Welcome,</span>
                <h2>John Doe</h2>
              </div>
            </div>
            {/* <!-- /menu profile quick info --> */}

            <br />

            {/* <!-- sidebar menu --> */}
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">

              <div className="menu_section">
                <h3>Profile</h3>
                <ul className="nav side-menu">
                  <li><a><i className="fa fa-user"></i> User <span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu" style={{"display": "none"}}>
                      <li><a href="index.html">Profile</a>
                      </li>
                      <li><a href="index2.html">Cohort</a>
                      </li>
                      <li><a href="index3.html">Update Information</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="menu_section">
                <h3>Devconnect</h3>
                <ul className="nav side-menu">
                  <li><a><i className="fa fa-comments-o"></i>Forums<span className="fa fa-chevron-down"></span></a>
                    <ul className="nav child_menu" style={{"display": "none"}}>
                      <li><a href="e_commerce.html">Cohort</a>
                      </li>
                      <li><a>Topics<span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu" style={{"display": "none"}}>
                          <li className="sub_menu"><a href="level2.html">Index</a>
                          </li>
                          <li><a href="#level2_1">Link</a>
                          </li>
                          <li><a href="#level2_2">Link</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                </ul>
              </div>

            </div>
            {/* <!-- /sidebar menu --> */}


          </div>
        </div>
    );
  }
}