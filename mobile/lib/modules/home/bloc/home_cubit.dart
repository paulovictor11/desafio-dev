import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/modules/home/repository/home_repository.dart';
import 'package:mobile/shared/models/pessoa.dart';

part 'home_state.dart';

class HomeCubit extends Cubit<HomeState> {

  final HomeRepository _repository;

  HomeCubit(this._repository) : super(const HomeState());

  void getOperacoes() async {
    try {
      state.copyWith(
        isLoading: true,
      );

      final response = await _repository.getOperacoes();

      state.copyWith(
        isLoading: false,
        pessoas: response,
      );
    } catch (err) {
      state.copyWith(
        error: err.toString()
      );
    }
  }
}