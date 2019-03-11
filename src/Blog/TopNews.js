import React, {Component} from 'react';
import '../App.css';
import '../assets/css/blog-post.css'

class TopNews extends React.Component {
  render (){
    return (
    <div class="col-md-4 card my-4">
        <h5 class="card-header">Top News</h5>
        <div class="card-body">
            <div class="row">
                <ul class="list-unstyled mb-0">
                    <li>
                        <a href="#">Football: Liverpool restate Premier League credentials as Arsenal end Man United run
                        </a>
                    </li><br/>
                    <li>
                        <a href="#">Basketball: Slingers coach Neo Beng Siang rues team's complacency in 99-95 overtime loss to CLS Knights
                        </a>
                    </li><br/>
                    <li>
                        <a href="#">NBA: Lowly Suns shock Warriors to snap four-year losing run, Lowry shines for Raptors against Heat
                        </a>
                    </li>
                    <li><br/>
                        <a href="#">Tennis: Ailing Serena Williams retires from third-round match at Indian Wells
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
  }
}

export default TopNews;
