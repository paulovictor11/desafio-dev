import 'dart:convert';

import 'package:mobile/shared/models/usuario.dart';

class Auth {
  final String access_token;
  final Usuario user;
  
  Auth({
    required this.access_token,
    required this.user,
  });

  Map<String, dynamic> toMap() {
    return {
      'access_token': access_token,
      'user': user.toMap(),
    };
  }

  factory Auth.fromMap(Map<String, dynamic> map) {
    return Auth(
      access_token: map['access_token'],
      user: Usuario.fromMap(map['user']),
    );
  }

  String toJson() => json.encode(toMap());

  factory Auth.fromJson(String source) => Auth.fromMap(json.decode(source));
}
