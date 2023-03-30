import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import '../src/form.js';
import { Form } from '../src/form.js';

describe('Form', () => {
  it('loads accessibly', async () => {
    const el: Form = await fixture(html` <fds-form id="myForm">
      <fds-textfield required label="Name" placeholder="Name" validationMessage="required field"></fds-textfield>
      <div class="actions">
        <fds-button type="submit" label="submit"></fds-button>
        <fds-outlined-button type="reset" label="reset"></fds-outlined-button>
      </div>
    </fds-form>`);

    await elementUpdated(el);
    await expect(el).to.be.accessible();
  });
  it('should submit the form', async () => {
    const el: Form = await fixture(html`
      <fds-form id="myForm">
        <fds-textfield required value="Lucy" label="Name" placeholder="Name" validationMessage="required field"></fds-textfield>
      </fds-form>
    `);

    await elementUpdated(el);
    expect(el.reportValidity()).to.be.true;
  });

  it('should reset the form', async () => {
    const el: Form = await fixture(html`
      <fds-form id="myForm">
        <fds-textfield id="textfield" required label="Name" placeholder="Name" validationMessage="required field"></fds-textfield>
      </fds-form>
    `);

    await elementUpdated(el);

    const textfield = (await el.querySelector('#textfield')) as HTMLInputElement;
    textfield.value = 'Lucy';
    el.reset();
    expect(textfield).value('');
  });
});
