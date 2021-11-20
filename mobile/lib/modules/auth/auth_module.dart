import 'package:flutter_modular/flutter_modular.dart';
import 'package:mobile/modules/auth/presenter/login_page.dart';
import 'package:mobile/modules/auth/presenter/register_page.dart';

class AuthModule extends Module {

  @override
  final List<Bind> binds = [];

  @override
  final List<ModularRoute> routes = [
    ChildRoute('/', child: (_, args) => const LoginPage()),
    ChildRoute('/register', child: (_, args) => const RegisterPage()),
  ];
}