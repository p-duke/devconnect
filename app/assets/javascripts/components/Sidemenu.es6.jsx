class Sidemenu extends React.Component {
  render() {
    let {id,first_name,last_name, avatar}=this.props.current_user

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
                <h2>{first_name} {last_name}</h2>
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
                      <li><a href={`/users/${id}/show`}>Profile</a>
                      </li>
                      <li><a href="/users/edit">Update Information</a>
                      </li>
                      <li><a href="/mentors">Mentors</a>
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
                          <li className="sub_menu"><a href="/topics">All</a>
                          </li>
                          <li><a href="/topics/1/posts">Job Opportunities</a>
                          </li>
                          <li><a href="/topics/2/posts">Font-End Development</a>
                          </li>
                          <li><a href="/topics/3/posts">Back-End Development</a>
                          </li>
                          <li><a href="/topics/4/posts">Nerd Life</a>
                          </li>
                          <li><a href="/topics/5/posts">Data Nerds</a>
                          </li>
                          <li><a href="/topics/6/posts">Anything Interesting</a>
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
