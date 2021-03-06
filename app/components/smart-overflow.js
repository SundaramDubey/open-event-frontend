import Component from '@ember/component';

export default Component.extend({
  classNames: ['smart-overflow'],
  didInsertElement() {
    this._super(...arguments);
    let $headerSpan = this.$('span');
    let $header = this.$();
    $header.attr('data-content', $headerSpan.text());
    $header.attr('data-variation', 'tiny');
    while ($headerSpan.outerHeight() > $header.height()) {
      $headerSpan.text((index, text) => {
        return text.replace(/\W*\s(\S)*$/, '...');
      });
      $header.popup({
        position: 'top center'
      });
      this.set('$header', $header);
    }
  },
  willDestroyElement() {
    this._super(...arguments);
    if (this.$header) {
      this.$header.popup('destroy');
    }
  }
});
