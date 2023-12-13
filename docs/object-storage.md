---
sidebar_label: Object Storage
sidebar_position: 55
---

# Object Storage

## S3

```
openstack ec2 credentials create
+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field      | Value                                                                                                                                                 |
+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------+
| access     | 3f9c7e6b7fd14a67bd646cb0f15e1804                                                                                                                      |
| links      | {'self': 'https://keystone.services.a.regiocloud.tech/v3/users/4914c3b71ea74d4e8c68c5979f1a22c3/credentials/OS-EC2/3f9c7e6b7fd14a67bd646cb0f15e1804'} |
| project_id | 6f173e9e3cda42ebaa2f7881f827d40b                                                                                                                      |
| secret     | 0b7e5a4dd6a242b595f566b5422a8d7b                                                                                                                      |
| trust_id   | None                                                                                                                                                  |
| user_id    | 4914c3b71ea74d4e8c68c5979f1a22c3                                                                                                                      |
+------------+-------------------------------------------------------------------------------------------------------------------------------------------------------+
```

```
openstack ec2 credentials list
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
| Access                           | Secret                           | Project ID                       | User ID                          |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
| 3f9c7e6b7fd14a67bd646cb0f15e1804 | 0b7e5a4dd6a242b595f566b5422a8d7b | 6f173e9e3cda42ebaa2f7881f827d40b | 4914c3b71ea74d4e8c68c5979f1a22c3 |
+----------------------------------+----------------------------------+----------------------------------+----------------------------------+
```

### MinIO Client

* https://min.io/docs/minio/linux/reference/minio-mc.html#minio-client
* https://min.io/docs/minio/linux/reference/minio-mc.html#install-mc

```
bash +o history
mc alias set testing https://swift.services.a.regiocloud.tech 3f9c7e6b7fd14a67bd646cb0f15e1804 0b7e5a4dd6a242b595f566b5422a8d7b
bash -o history
```

```
mc mb testing/mybucket
Bucket created successfully `testing/mybucket`.
```

```
mc ls testing
[2023-12-13 22:14:28 CET]     0B mybucket/
```

```
echo "HELLO WORLD" > myobject
mc cp myobject testing/mybucket
...mples/myobject: 12 B / 12 B ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 22 B/s 0s
```

```
mc ls testing/mybucket
[2023-12-13 22:15:21 CET]    12B STANDARD myobject
```

```
mc rm testing/mybucket/myobject
Removed `testing/mybucket/myobject`.
```

```
mc rb testing/mybucket
Removed `testing/mybucket` successfully.
```
