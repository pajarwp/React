import React, {Component} from 'react';
import '../App.css';
import '../assets/css/blog-post.css'

class Post extends React.Component {
  render (){
    return (
    <div class="col-md-8">
        <h1 class="mt-4">Pep Guardiola outlines Man City plan for title race with Liverpool FC</h1>
        <p class="lead">by<a href="#">Pajar Wijaya Putra</a></p>
        <p>Posted on January 1, 2019 at 12:00 PM</p>
        <img class="img-fluid rounded" src={require('../assets/img/pep.jpg')} alt=""/>
        <p class="lead">Pep Guardiola says Manchester City will treat the remaining eight fixtures of the Premier League season on a game-by-game basis.</p>
        <blockquote class="blockquote"/>
        <p class="mb-0">The Blues were seven points adrift of Liverpool on December 30 but a run of four draws in six games saw Jurgen Klopp's side squander their advantage at the Premier League's summit.

Guardiola's side face Schalke in the Champions League on Tuesday night before their FA Cup quarter-final at Swansea precedes the international break. City do not feature in the Premier League again until the trip to Fulham on March 30.

And the City boss says the run-in of City's Premier League title defence is like a season in itself.

"Today we start a competition with nine games," he said after a Raheem Sterling hat-trick fired City to a 3-1 win against Watford on Saturday."It's not a competition with 38, it was a competition with nine games and we played the first one.

"We won it and now we don't have time to think too much. 21 days, we don't play the next game in the Premier League.

"We have on Tuesday a final for us to reach quarter-finals of Champions League. The game Norwich against Swansea, even though they lost I was quite impressed with how good they played against a team top of the league. So it's game-by-game."City suffered a blip in form in December that saw them drop as low as third in the Premier League table, but their impressive run of domestic form since the turn of the year enabled the Blues to leapfrog Liverpool back into first place on February 6.

The Blues led from the front throughout their record-breaking, 100-point league title win last season and, while admitting the Blues are likely to drop points between now and the end of the season, Guardiola says he prefers setting the pace in title races.

"It's nice to be there of course," he explained.</p>
<button type="button" class="btn btn-primary">Read More</button>
    </div>
    )
  }
}

export default Post;
