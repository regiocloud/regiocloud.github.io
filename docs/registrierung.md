---
sidebar_label: Registrierung
sidebar_position: 20
---

# Registrierung

## OKEANOS.tech
Um sich am Dashboard für OKEANOS.tech anmelden zu können, ist eine vorherige Registrierung notwendig.

Wenn Sie sich auf dem Login-Bildschirm befinden, klicken Sie auf `Login` um auf die nächste Seite zu gelangen.

<img
  src={require('./images/registrierung/login.png').default}
  width="100%"
/>

Entweder können Sie sich hier einloggen, wenn Sie bereits ein Konto haben oder eine Neuregistrierung durchführen, was hier machen werden.

Klicken Sie bitte auf `Registrieren`.

<img
  src={require('./images/registrierung/start.png').default}
  width="100%"
/>

Im weiteren Prozess geben Sie Ihre Daten ein und bestätigen, dass Sie die Datenschutzerklärung gelesen haben.

Ein starkes Passwort können Sie bspw. mit `pwgen -cnyBv 32 1` erstellen.

<img
  src={require('./images/registrierung/dateneingabe.png').default}
  width="100%"
/>

Wenn Sie alle Daten korrekt eingegeben haben und auf `Weiter` klicken, müssen Sie Ihre Mailadresse bestätigen. Dazu erhalten Sie eine Mail von uns. Entweder können Sie auf den Link klicken oder den Code in das Feld eingeben. Bestätigen Sie mit `Weiter`.

<img
  src={require('./images/registrierung/code.png').default}
  width="100%"
/>

Um die Sicherheit Ihres Accounts zu erhöhen, ist es ratsam und von uns empfohlen, die Zwei-Faktor-Authentisierung (2FA) zu aktivieren. Dafür können Sie entweder eine App (z.B. Aegis, FreeOTP) oder ein Gerät (z.B. Nitrokey) verwenden.

<img
  src={require('./images/registrierung/2fa.png').default}
  width="100%"
/>

Wenn Sie sich für App entscheiden, welche wir in diesem Beispiel aktiviert haben, wird Ihnen einen QR-Code angezeigt, den Sie in Ihrer 2FA-App nutzen können. Alternativ können Sie auch das Secret in Ihrer App eingeben.

<img
  src={require('./images/registrierung/qrcode.png').default}
  width="100%"
/>

Nach dem Scannen des QR-Codes oder der Eingabe des Secrets, müssen Sie den erhaltenen Code entsprechend in dem dafür vorgesehenen Feld eintragen.

Wenn Sie alles richtig gemacht haben, landen Sie im Anschluss im Verlwaltungsmenü Ihres neu angelegten Acconts.

<img
  src={require('./images/registrierung/fertig.png').default}
  width="100%"
/>
