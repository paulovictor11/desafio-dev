part of 'home_cubit.dart';

class HomeState extends Equatable {

  final bool isLoading;
  final String? error;
  final List<Pessoa>? pessoas;

  const HomeState({
    this.isLoading = false,
    this.error,
    this.pessoas,
  });

  copyWith({
    bool? isLoading,
    String? error,
    List<Pessoa>? pessoas
  }) {
    return HomeState(
      isLoading: isLoading ?? this.isLoading,
      error: error ?? this.error,
      pessoas: pessoas ?? this.pessoas,
    );
  }

  @override
  List<Object?> get props => [
    isLoading,
    error,
    pessoas,
  ];
}
