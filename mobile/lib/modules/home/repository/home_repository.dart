import 'package:dio/dio.dart';
import 'package:mobile/shared/models/pessoa.dart';

class HomeRepository {

  final Dio _dio;

  HomeRepository(this._dio);

  Future<List<Pessoa>> getOperacoes() async {
    try {
      final response = await _dio.get('/cnab/operacao');
      return Pessoa.fromList(response.data);
    } on DioError catch (err) {
      return err.response!.data['message'];
    }
  }
}