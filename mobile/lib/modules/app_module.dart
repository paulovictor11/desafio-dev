import 'package:dio/dio.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:mobile/modules/auth/auth_module.dart';
import 'package:mobile/modules/home/home_module.dart';
import 'package:mobile/shared/utils/constants.dart';

class AppModule extends Module {

  @override
  final List<Bind> binds = [
    Bind.lazySingleton((i) => Dio(BaseOptions(baseUrl: apiLocalhost)))
  ];

  @override
  final List<ModularRoute> routes = [
    ModuleRoute('/', module: AuthModule()),
    ModuleRoute('/home', module: HomeModule()),
  ];
}