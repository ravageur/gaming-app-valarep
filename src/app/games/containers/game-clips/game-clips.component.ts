import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../models/game';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '../../services/games.service';
import {switchMap} from 'rxjs/operators';
import {ClipsService} from '../../../clips/services/clips.service';
import {Clip} from '../../../clips/models/clip';

@Component({
  selector: 'app-game-clips',
  templateUrl: './game-clips.component.html',
  styleUrls: ['./game-clips.component.scss']
})
export class GameClipsComponent  {


}
