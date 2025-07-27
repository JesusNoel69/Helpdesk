export class DetailDTO {
  constructor({ responsible, startTime, promiseEnd, stateColor, comments }) {
    this.responsible = responsible;
    this.startTime = startTime;
    this.promiseEnd = promiseEnd;
    this.stateColor = stateColor;
    this.comments = comments;
  }
}
