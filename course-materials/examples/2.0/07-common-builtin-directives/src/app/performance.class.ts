import { Artist } from './artist.class';
import { Song } from './song.class';

export class Performance {
  song: Song;
  artist: Artist;
  genreName: string;
  editMode: Boolean;

  constructor( artist: Artist, song: Song, genreName: string, editMode?: boolean ) {
    this.song = song;
    this.artist = artist;
    this.genreName = genreName;
    this.editMode = editMode || false;
  }
}
