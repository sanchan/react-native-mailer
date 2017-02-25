import * as types from '../actions/actionTypes';

const initialState = {
  currentEmail: {},
  emails: [{
    id: 0,
    sender: 'john@example.com',
    contact: 'John Doe',
    title: 'Hi there cowboy! 🤠',
    date: '22:30',
    unseen: false,
    bodyBrief: 'Hey man, how is it going?',
    body: `
      <div style="padding: 1 10">
        <p>
          Hey man, how is it going?<br />
          I have something amazing to tell you!!<br />
          When can we have a call?<br /><br />
          Regards
        </p>
        --------------------------------------------------
        <div>
          <p><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif">John Doe,</span><span style="font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif"><u></u><u></u></span></p>
          <p><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif">Customer Service Manager</span><span style="font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif"><u></u><u></u></span></p>
          <p><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif">SOMECOMPANY LTD</span><span style="font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif"><u></u><u></u></span></p>
          <p><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,sans-serif">CELL 012-345678</span><span style="font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif"><u></u><u></u></span></p>
          <p><span style="font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif"><u></u>&nbsp;<u></u></span></p>
          <p><span style="font-size:8.0pt;font-family:&quot;Calibri&quot;,sans-serif">This e-mail message may contain confidential or legally privileged information and is intended only for the use of the intended recipient(s). Any unauthorized disclosure, dissemination,
          distribution, copying or the taking of any action in reliance on the information herein is prohibited. E-mails are not secure and cannot be guaranteed to be error free as they can be intercepted, amended, or contain viruses. Anyone who communicates with us
          by e-mail is deemed to have accepted these risks.<u></u><u></u></span></p>
        </div>
      </div>
    `,
    active: true
  },{
    id: 1,
    sender: 'brad@example.com',
    contact: 'Brad Lee',
    title: "Pull request merged",
    date: '19:22',
    unseen: true,
    bodyBrief: 'Your pull request have been merged',
    body: `
    <div style="padding: 1 10">
      <table style="width:100%;border-collapse:collapse">
        <tbody>
          <tr>
            <td id="m_-1771716522072700751main" style="font:14px/1.4285714 Arial,sans-serif;padding:0;background-color:#fafafa;border-radius:5px">
              <div style="border:1px solid #cccccc;border-radius:5px;padding:20px">
                <table style="width:100%;border-collapse:collapse">
                  <tbody>
                    <tr>
                      <td style="font:14px/1.4285714 Arial,sans-serif;padding:0">
                        <table style="width:100%;border-collapse:collapse">
                          <tbody>
                            <tr>
                              <td id="m_-1771716522072700751avatar" style="font:14px/1.4285714 Arial,sans-serif;padding:0;width:32px;vertical-align:top">
                                <img width="32" height="32" alt="andresbk" src="https://ci4.googleusercontent.com/proxy/hnmbNqK7RS4LQarHHGzBV3yb5jnihjhUVJhu0nC8qsIpmDsxEoJDValtBSTRj1DbWSrziRQ0fubVc-VU8aDGYeRPcNtjiOvsR_TABByCEHbU_BPVx__uEKFnVvumfln3hOLg2ktF0aHvaw=s0-d-e1-ft#https://avatar-cdn.atlassian.com/9792c4160593556bf6f2357c01e1e903?s=32&amp;ts=1487782102" style="border-radius:3px" class="CToWUd">
                              </td>
                              <td id="m_-1771716522072700751content" style="font:14px/1.4285714 Arial,sans-serif;padding:0 0 0 10px">
                                <table style="width:100%;border-collapse:collapse">
                                  <tbody>
                                    <tr>
                                      <td class="m_-1771716522072700751user-action" style="font:14px/1.4285714 Arial,sans-serif;padding:0;line-height:1">
                                        <span>
                                        <strong>Brad Lee</strong>
                                        <span class="m_-1771716522072700751badge m_-1771716522072700751fulfilled" style="display:inline-block;font-size:11px;font-weight:bold;border-radius:3px;text-transform:uppercase;line-height:1;color:#ffffff;padding:2px 5px 1px;background-color:#14892c">merged</span>
                                        pull request #10:
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="m_-1771716522072700751title" style="font:14px/1.4285714 Arial,sans-serif;padding:5px 0 0;font-weight:bold;line-height:1.2">
                                        <a href="https://www.example.com" style="color:#3572b0;text-decoration:none" target="_blank" data-saferedirecturl="https://www.example.com">Card 123</a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="m_-1771716522072700751approvers" style="font:14px/1.4285714 Arial,sans-serif;padding:10px 0 10px">
                                        <table style="width:100%;border-collapse:collapse">
                                          <tbody>
                                            <tr>
                                              <td class="m_-1771716522072700751list-label" style="font:14px/1.4285714 Arial,sans-serif;padding:0;color:#707070;padding-right:10px;vertical-align:top;white-space:nowrap;line-height:24px">Approved by</td>
                                              <td class="m_-1771716522072700751list-value" style="font:14px/1.4285714 Arial,sans-serif;padding:0;width:100%">
                                                <table style="width:auto;border-collapse:collapse">
                                                  <tbody>
                                                    <tr>
                                                      <td class="m_-1771716522072700751avatar" style="font:14px/1.4285714 Arial,sans-serif;padding:0 5px 0 0">
                                                        <img width="24" height="24" alt="andresbk" title="andresbk" src="https://ci5.googleusercontent.com/proxy/SuY_UppzIu8YUOxVcNPeFiJ5t_Wfm8JgBWUu6nbY6l-tfYamWSRvZZtlLuFKhKjuYBJNB5_Y1SdbI1TEi44BBxDjuae3g9Iv2K0x3juggyrCoZhobXBGuvoaMcHpa3npd9oC6k0MENQP8g=s0-d-e1-ft#https://avatar-cdn.atlassian.com/9792c4160593556bf6f2357c01e1e903?s=24&amp;ts=1487782102" style="border-radius:3px;vertical-align:top" class="CToWUd">
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td class="m_-1771716522072700751actions" colspan="2" style="font:14px/1.4285714 Arial,sans-serif;padding:10px 0 0;border-top:1px solid #cccccc;line-height:1">
                        <a href="https://www.example.com">See this pull request</a> or add a comment replying to this email.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    `
  }]
};

export default function mailsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_CURRENT_EMAIL:
      return {
        ...state,
        currentEmail: action.payload
      };
    default:
      return state;
  }
}
