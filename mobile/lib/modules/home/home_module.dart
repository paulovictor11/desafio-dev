import 'package:flutter_modular/flutter_modular.dart';
import 'package:mobile/modules/home/bloc/home_cubit.dart';
import 'package:mobile/modules/home/presenter/home_page.dart';
import 'package:mobile/modules/home/repository/home_repository.dart';

class HomeModule extends Module {

  @override
  final List<Bind> binds = [
    Bind.lazySingleton((i) => HomeRepository(i())),
    Bind.lazySingleton((i) => HomeCubit(i())),
  ];

  @override
  final List<ModularRoute> routes = [
    ChildRoute('/', child: (_, args) => const HomePage()),
  ];
}