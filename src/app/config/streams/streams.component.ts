import { Component } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent {
  classNames: string[] = ['Form 1', 'Form 2', 'Form 3', 'Form 4'];
  streamNames: string[] = ['West', 'East'];

  stream = {
    id: null as number | null, // Ensure ID is a number
    className: '',
    streamName: ''
  };

  submitStream() {
    if (!this.stream.id || !this.stream.className || !this.stream.streamName) {
      alert('Please enter an ID and select both class and stream.');
      return;
    }
    console.log('Stream Data:', this.stream);
    alert(`Stream assigned: ID ${this.stream.id}, ${this.stream.className} - ${this.stream.streamName}`);

    // Reset form after submission
    this.stream = { id: null, className: '', streamName: '' };
  }
}
