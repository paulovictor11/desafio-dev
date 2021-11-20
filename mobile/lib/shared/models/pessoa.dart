import 'dart:convert';

import 'package:mobile/shared/models/operacao.dart';

class Pessoa {
  final String dono;
  final List<Operacao> lojas;
  final double saldoTotal;

  Pessoa({
    required this.dono,
    required this.lojas,
    required this.saldoTotal,
  });

  Map<String, dynamic> toMap() {
    return {
      'dono': dono,
      'lojas': lojas.map((x) => x.toMap()).toList(),
      'saldoTotal': saldoTotal,
    };
  }

  factory Pessoa.fromMap(Map<String, dynamic> map) {
    return Pessoa(
      dono: map['dono'],
      lojas: List<Operacao>.from(map['lojas']?.map((x) => Operacao.fromMap(x))),
      saldoTotal: map['saldoTotal'],
    );
  }

  String toJson() => json.encode(toMap());

  factory Pessoa.fromJson(String source) => Pessoa.fromMap(json.decode(source));

  static List<Pessoa> fromList(List map) {
    List<Pessoa> pessoas = [];
    
    for (var item in map) {
      pessoas.add(Pessoa.fromMap(item));
    }

    return pessoas;
  }
}
