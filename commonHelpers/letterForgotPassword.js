module.exports = function letterForgotPassword (password){
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <title>Gadget order confirmed</title>
        <!--[if (mso 16)]>
        <style type="text/css">
           a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]>
        <style>sup { font-size: 100% !important; }</style>
        <![endif]-->
        <!--[if gte mso 9]>
        <xml>
           <o:OfficeDocumentSettings>
              <o:AllowPNG></o:AllowPNG>
              <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if !mso]>
        <!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Sora&amp;display=swap" rel="stylesheet">
        <!--<![endif]-->
        <style type="text/css">
           #outlook a {
           padding:0;
           }
           .es-button {
           mso-style-priority:100!important;
           text-decoration:none!important;
           }
           a[x-apple-data-detectors] {
           color:inherit!important;
           text-decoration:none!important;
           font-size:inherit!important;
           font-family:inherit!important;
           font-weight:inherit!important;
           line-height:inherit!important;
           }
           .es-desk-hidden {
           display:none;
           float:left;
           overflow:hidden;
           width:0;
           max-height:0;
           line-height:0;
           mso-hide:all;
           }
           @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:18px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
        </style>
     </head>
     <body>
        <div class="es-wrapper-color">
           <!--[if gte mso 9]>
           <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#f6f6f6"></v:fill>
           </v:background>
           <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;position:absolute;top:0;left:0;height:100%;width:100%">
              <tbody>
                 <tr style="border-collapse:collapse">
                    <td valign="top" style="padding:0">
                       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px">
                          <tbody>
                             <tr style="border-collapse:collapse">
                                <td align="center" style="padding:0">
                                   <table class="es-content-body" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#ffffff" bgcolor="#ffffff" align="center" width="600">
                                      <tbody>
                                         <tr style="border-collapse:collapse">
                                            <td align="left" style="padding:0;margin:0;padding-top:40px;padding-left:35px;padding-right:35px;background-color:#ffffff" bgcolor="#ffffff">
                                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt">
                                                  <tbody>
                                                     <tr style="border-collapse:collapse">
                                                        <td valign="top" align="center" style="padding:0;mso-cellspacing:0in">
                                                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt">
                                                              <tbody>
                                                                 <tr style="border-collapse:collapse">
                                                                    <td align="center" style="padding:0;font-size:0">
                                                                       <h1 style="margin:0;line-height:28px;font-size:24px;font-family:'Sora', sans-serif;font-style:normal;font-weight:bold;color:#333333;text-align:center">Your New Password</h1>
                                                                    </td>
                                                                 </tr>
                                                              </tbody>
                                                           </table>
                                                        </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt">
                                                  <tbody>
                                                     <tr style="border-collapse:collapse">
                                                        <td valign="top" align="center" style="padding:0;mso-cellspacing:0in">
                                                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt">
                                                              <tbody>
                                                                 <tr style="border-collapse:collapse">
                                                                    <td align="center" style="padding:0;font-size:0">
                                                                       <p style="margin:0;line-height:20px;font-size:16px;font-family:'Sora', sans-serif;font-style:normal;font-weight:normal;color:#333333;text-align:center">Hello,</p>
                                                                       <p style="margin:0;line-height:20px;font-size:16px;font-family:'Sora', sans-serif;font-style:normal;font-weight:normal;color:#333333;text-align:center">Your new password is: ${password}</p>
                                                                       <p>Please change your password in your personal account for security purposes</p>
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
                                   <table class="es-footer-body" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#2d3748" align="center" bgcolor="#2d3748" width="600">
                                      <tbody>
                                         <tr style="border-collapse:collapse">
                                            <td align="left" style="padding:0;margin:0;padding-top:35px;padding-bottom:40px;padding-left:35px;padding-right:35px;background-color:#2d3748" bgcolor="#2d3748">
                                               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt">
                                                  <tbody>
                                                     <tr style="border-collapse:collapse">
                                                        <td valign="top" align="center" style="padding:0;mso-cellspacing:0in">
                                                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt">
                                                              <tbody>
                                                                 <tr style="border-collapse:collapse">
                                                                    <td align="center" style="padding:0;font-size:0">
                                                                       <p style="margin:0;line-height:14px;font-size:12px;font-family:'Sora', sans-serif;font-style:normal;font-weight:normal;color:#ffffff;text-align:center">You received this email because you requested a password reset for your account. If you didn't request this reset, please ignore this email.</p>
                                                                       <p style="margin:0;line-height:14px;font-size:12px;font-family:'Sora', sans-serif;font-style:normal;font-weight:normal;color:#ffffff;text-align:center">© 2023 Company Name. All rights reserved.</p>
                                                                       <p style="margin:0;line-height:14px;font-size:12px;font-family:'Sora', sans-serif;font-style:normal;font-weight:normal;color:#ffffff;text-align:center">123 Main Street, City, State, 12345</p>
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
              </tbody>
           </table>
        </div>
     </body>
  </html>`;
}