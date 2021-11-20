import 'dart:convert';

class Operacao {
  final int tipo;
  final String descricao;
  final String natureza;
  final String data;
  final String valor;
  final String hora;
  final String donoLoja;
  final String nomeLoja;
  
  Operacao({
    required this.tipo,
    required this.descricao,
    required this.natureza,
    required this.data,
    required this.valor,
    required this.hora,
    required this.donoLoja,
    required this.nomeLoja,
  });

  Map<String, dynamic> toMap() {
    return {
      'tipo': tipo,
      'descricao': descricao,
      'natureza': natureza,
      'data': data,
      'valor': valor,
      'hora': hora,
      'donoLoja': donoLoja,
      'nomeLoja': nomeLoja,
    };
  }

  factory Operacao.fromMap(Map<String, dynamic> map) {
    return Operacao(
      tipo: map['tipo'],
      descricao: map['descricao'],
      natureza: map['natureza'],
      data: map['data'],
      valor: map['valor'],
      hora: map['hora'],
      donoLoja: map['donoLoja'],
      nomeLoja: map['nomeLoja'],
    );
  }

  String toJson() => json.encode(toMap());

  factory Operacao.fromJson(String source) => Operacao.fromMap(json.decode(source));
}
