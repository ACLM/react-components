import React from 'react';

export default function Conversation() {
  return (
    <div>
    <div className="conversation_frame">
  <div className="reset_link"><a href="#contribute">Add to conversation</a></div>
<div className="conversation">
  <div className="conversation_header">
  <div className="statement_header">Conversation</div><div className="tone_header"> Tone Analysis</div>
  </div>

  <div className="speaker consumer">
    <div className="avatar"><div className="customer_avatar"></div>
    </div>
    <div className="statement_container">
      <span className="speaker_name">Fred</span> <span className="speaker_handle">@Fred_theConsumer</span> <span className="time_stamp"> 6 hours ago</span>
      <div className="speaker_statement negative">My charger isn’t working.</div>
    </div>

    <div className="score_container">
      <div className="tone_text negative">Sad</div><div className="tone_score negative">0.61</div>
    </div>

  </div>

  <div className="speaker">
    <div className="avatar "><div className="support_avatar"></div>
    </div>
    <div className="statement_container">
      <span className="speaker_name">Agent</span> <span className="speaker_handle">@Agent_technology_company</span> <span className="time_stamp"> 5 hours ago</span>
      <div className="speaker_statement">Thanks for reaching out. Would you like me to review your account and clarify how the service works or advise some fixes?</div>
    </div>
    <div className="score_container">
      <div className="tone_text">Polite</div><div className="tone_score ">0.93</div>
      <div className="tone_text">Sympathetic</div><div className="tone_score ">0.84</div>
      <div className="tone_text">Excited</div><div className="tone_score ">0.91</div>
    </div>
  </div>

  <div className="speaker consumer">
    <div className="avatar "><div className="customer_avatar"></div>
    </div>
    <div className="statement_container ">
      <span className="speaker_name">Fred</span> <span className="speaker_handle">@Fred_theConsumer</span> <span className="time_stamp"> 4 hours ago</span>
      <div className="speaker_statement negative">I put my charger in my tablet to charge it up last night and it keeps saying it isn't charging. The charging icon comes   on, but it stays on even when I take the charger out. Which is ridiculous, it’s brand new.</div>
    </div>
    <div className="score_container">
      <div className="tone_text negative">Sad</div><div className="tone_score negative">0.94</div>
      <div className="tone_text negative">Frustrated</div><div className="tone_score negative">0.58</div>
    </div>
  </div>

  <div className="speaker">
    <div className="avatar "><div className="support_avatar"></div>
    </div>
    <div className="statement_container">
      <span className="speaker_name">Agent</span> <span className="speaker_handle">@Agent_technology_company</span> <span className="time_stamp"> 2 hours ago</span>
      <div className="speaker_statement ">I’m sorry you’re having issues with charging. What kind of charger are you using?</div>
    </div>
    <div className="score_container">
      <div className="tone_text ">Sympathetic</div><div className="tone_score">0.87</div>
      <div className="tone_text ">Polite</div><div className="tone_score">0.75</div>
    </div>
  </div>

  <div className="speaker consumer">

    <div className="avatar "><div className="customer_avatar"></div>
    </div>


    <div className="statement_container">
      <span className="speaker_name">Fred</span> <span className="speaker_handle">@Fred_theConsumer</span> <span className="time_stamp"> 1 hour ago</span>
      <div className="speaker_statement ">I’m using the charger that came with it.</div>
    </div>

    <div className="score_container">
      <div className="tone_text">None Detected</div><div className="tone_score "></div>
    </div>

  </div>

  <div className="speaker">
    <div className="avatar "><div className="support_avatar"></div>
    </div>
    <div className="statement_container">
      <span className="speaker_name">Agent</span> <span className="speaker_handle">@Agent_technology_company</span> <span className="time_stamp"> 38 minutes ago</span>
      <div className="speaker_statement">Okay, great. Could you plug the charger in for me, and then hold the power button down for about 10 seconds. After that, we should have you up and running.</div>
    </div>
    <div className="score_container">
      <div className="tone_text ">Excited</div><div className="tone_score">0.92</div>
      <div className="tone_text ">Sympathetic</div><div className="tone_score">0.87</div>
    </div>
  </div>

  <div className="speaker consumer">
    <div className="avatar "><div className="customer_avatar"></div>
    </div>
    <div className="statement_container ">
      <span className="speaker_name">Fred</span> <span className="speaker_handle">@Fred_theConsumer</span> <span className="time_stamp"> 24 minutes ago</span>
      <div className="speaker_statement">Wow! It’s working. Thank you so much for the tip.</div>
    </div>
    <div className="score_container">
      <div className="tone_text">Excited</div><div className="tone_score">0.90</div>
      <div className="tone_text">Satisfied</div><div className="tone_score">0.78</div>
      <div className="tone_text">Sympathetic</div><div className="tone_score">0.73</div>
      <div className="tone_text">Polite</div><div className="tone_score">0.71</div>
    </div>
  </div>

  <div className="speaker">
    <div className="avatar"><div className="support_avatar"></div>
    </div>
    <div className="statement_container">
      <span className="speaker_name">Agent</span> <span className="speaker_handle">@Agent_technology_company</span> <span className="time_stamp">16 minutes ago</span>
      <div className="speaker_statement ">Great! Is there anything else I can help you with today?</div>
    </div>
    <div className="score_container">
      <div className="tone_text ">Excited</div><div className="tone_score">0.90</div>
    </div>
  </div>

</div>
  <div id="contribute" className="contribute_container">
    <div className="input_wrapper">
    <div className="input_avatar customer_avatar"></div>
      <div className="input_area"><textarea placeholder="Reply to @Agent_technology_company" type="text" ></textarea></div>
    <div className="submit_button"><button className="base--button_fill">Reply</button></div>
    </div>
  </div>
  <div className="conversation_footer">
    <div className="reset"><a href="#">Reset Conversation</a></div>
    <div className="json"><a href="#">View JSON</a></div>
  </div>
</div>
</div>
  );
}
