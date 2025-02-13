---
sidebar_label: Authentifizierung
sidebar_position: 35
---

# Authentifizierung

In der Dokumentation wird der Nutzer `alice` aus der Domain `example` mit dem
Passwort `password` in der Region A für Beispiele genutzt. Dem Nutzer `alice`
steht das Projekt `example-project` zur Verfügung.

## Dashboard für Infrastructure as a Service

* https://a.regiocloud.tech/auth/login/

<img
  src={require('./images/authentifizierung/horizon-1.png').default}
  width="50%"
/>

## API & CLI für Infrastructure as a Service

* https://docs.openstack.org/python-openstackclient/latest/configuration/index.html

### Benutzername & Passwort

* https://a.regiocloud.tech/project/api_access/clouds.yaml/

```yaml title="clouds.yaml"
clouds:
  openstack:
    auth:
      auth_url: https://keystone.services.a.regiocloud.tech
      project_name: "example-project"
      project_domain_name: "example"
      username: "alice"
      user_domain_name: "example"
    region_name: "RegionA"
    interface: "public"
    identity_api_version: 3
```

```yaml title="secure.yaml"
clouds:
  openstack:
    auth:
      password: "password"
```

### Application Credentials

* https://docs.openstack.org/keystone/latest/user/application_credentials.html

<img
  src={require('./images/authentifizierung/horizon-application-credentials-1.png').default}
  width="50%"
/>

<img
  src={require('./images/authentifizierung/horizon-application-credentials-2.png').default}
  width="50%"
/>

<img
  src={require('./images/authentifizierung/horizon-application-credentials-3.png').default}
  width="50%"
/>

```yaml title="clouds.yaml"
clouds:
  openstack:
    auth:
      auth_url: https://keystone.services.a.regiocloud.tech
      application_credential_id: "355300a7cdd5459b80310308099b9926"
      application_credential_secret: "Bn_RwoUbP8e5IMLr-gRvGImQCBa6HOtBkr5tgDmEJIcqhd3QB|1uE_ORsDVYBQMrAShPFma3DQQmQ7TOU4Fbwg"
    region_name: "RegionA"
    interface: "public"
    identity_api_version: 3
    auth_type: "v3applicationcredential"
```

## Dashboard für OKEANOS.tech

* https://dashboard.okeanos.tech/login

Um sich mit seinem Account an OKEANOS.tech anzumelden, rufen Sie `https://dashboard.okeanos.tech/login` auf und klicken Sie auf `Login`.

<img
  src={require('./images/authentifizierung/gardener-login.png').default}
  width="50%"
/>

Sie werden automatisch auf `https://auth.okeanos.tech` weitergeleitet. Geben Sie dort bitte Ihren Login Namen (meistens Ihre Mailadresse) ein. Geben Sie im zweiten Schritt dann Ihr Passwort ein.

<img
  src={require('./images/authentifizierung/zitadel-login.png').default}
  width="50%"
/>

<img
  src={require('./images/authentifizierung/zitadel-password.png').default}
  width="50%"
/>

Als letztes werden Sie nach Ihrem hinterlegten zweiten Faktor gefragt, sollten Sie diesen eingerichtet haben. Geben Sie den Code ein und beenden Sie den Anmeldeprozess.

<img
  src={require('./images/authentifizierung/zitadel-2fa.png').default}
  width="50%"
/>

Wenn Sie das Secret korrekt eingegeben haben, landen Sie im Dashboard von OKEANOS.tech und können in Ihren Projekten Shoots (Cluster) erstellen.

<img
  src={require('./images/authentifizierung/gardener-dashboard.png').default}
  width="50%"
/>
