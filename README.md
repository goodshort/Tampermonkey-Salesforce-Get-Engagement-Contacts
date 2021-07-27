# Tampermonkey Get Engagement Contacts

This script is used to retrieves and copy the Engagement Contacts emails in Salesforce. This is usedfor easily mail all contacts of a Salesforce Engagement.<br>
It adds a `Get Engagement Contacts` button on the top left of the Salesforce home page.<br>

Second button can be found here: [Refresh All](https://github.com/goodshort)

## Workflow

1. Go to the Engagement from which you would like to copy the Contacts from and click on `Engagement Contacts`

![Click on Engagement Contacts](https://github.com/goodshort/Tampermonkey-Salesforce-Get-Engagement-Contacts/blob/main/workflow1.png)

2. Once the tab is open click on the button `Get Engagement Contacts`

![Click on Get Engagement Contacts](https://github.com/goodshort/Tampermonkey-Salesforce-Get-Engagement-Contacts/blob/main/workflow2.png)

3. The contacts will automatically be copied to your clipboard and you can simply paste them in the `To:` field of the UDC case

![Paste the contact in the To: field of the UDC case](https://github.com/goodshort/Tampermonkey-Salesforce-Get-Engagement-Contacts/blob/main/workflow3.png)

### Known issue

The copy function does not work well when you have multiple `Engagement Contacts` tab opened. An error message should appear, but it is not always the case. So make sure to use this workflow with as less open tabs (in Salesforce) as you can.

## Installation steps

1. Download [Tampermonkey](https://www.tampermonkey.net/) for your browser
2. Install the script by clicking on this [link](https://github.com/goodshort/Tampermonkey-Salesforce-Get-Engagement-Contacts/raw/main/GetEngagementContacts.user.js)

## Updates

If you installed the userscript on your browser from the link above, your version of the script should automatically update to the latest version hosted here.
Tampermonkey is looking for the version number in the top of the script. If version hosted here is newer, it will get the newest version.

## Contribute

Please try to make this better and submit a pull request.
