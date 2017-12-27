import $ from 'jquery';

import './styles/_base.scss';


// HEADER
$(document).ready(() => {
  const buttonWhatIsAgora = $('#action-what');
  const buttonHowItWorks = $('#action-how');

  const messageWhatIsAgora = $('#what-container');
  const messageHowItWorks = $('#how-container');

  buttonWhatIsAgora.click(() => {
    messageHowItWorks.hide('fast');
    messageWhatIsAgora.show('fast');
    buttonWhatIsAgora.hide();
    buttonHowItWorks.show();
  });

  buttonHowItWorks.click(() => {
    messageWhatIsAgora.hide('fast');
    messageHowItWorks.show('fast');
    buttonHowItWorks.hide();
    buttonWhatIsAgora.show();
  });

  // EVENTS
  const COLORS = [
    {
      'primary': '#651FFF',
      'secondary': '#DD12FF',
    },
    {
      'primary': '#3593FF',
      'secondary': '#651FFF',
    },
    {
      'primary': '#19CCA8',
      'secondary': '#3593FF',
    },
    {
      'primary': '#78d91a',
      'secondary': '#19CCA8',
    },
    {
      'primary': '#dec52a',
      'secondary': '#78d91a',
    },
    {
      'primary': '#ffbb34',
      'secondary': '#dec52a',
    },
    {
      'primary': '#ff2046',
      'secondary': '#ffbb34',
    },
    {
      'primary': '#ff34b5',
      'secondary': '#ff2046',
    },
    {
      'primary': '#dd12ff',
      'secondary': '#ff34b5',
    },
  ];
});
