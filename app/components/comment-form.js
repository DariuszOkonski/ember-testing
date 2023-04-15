/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommentFormComponent extends Component {
  @tracked comment = '';

  @action submitComment() {
    this.args.submitComment({ comment: this.comment });
  }
}
